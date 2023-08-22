"use client";
import { addToAlbum, createAlbum, searchFolder } from "@/app/albums/album-api";
import { ImageData } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { BsFolderSymlink } from "react-icons/bs";
import toast from "react-hot-toast";
import { Separator } from "@/components/ui/separator";

export function AddToAlbum({ image }: { image: ImageData }) {
  const [dialog, setDialog] = useState(false);
  const [album, setAlbum] = useState("");
  const [create, setCreate] = useState(false);
  // const { toast } = useToast();

  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="gap-x-2">
          <BsFolderSymlink />
          <p>Add to Album</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex gap-12">
            <DialogTitle
              onClick={() => {
                if (create) setCreate(!create);
              }}
              className={`cursor-pointer hover:underline underline-offset-auto ${
                !create ? "underline underline-offset-4" : ""
              }`}
            >
              Add to Album
            </DialogTitle>

            <DialogTitle
              onClick={() => {
                if (!create) setCreate(!create);
              }}
              className={`cursor-pointer underline-offset-4 ${
                create ? "underline " : ""
              } ${!create ? "hover:underline" : ""}`}
            >
              Create Album
            </DialogTitle>
          </div>
          {!create ? (
            <DialogDescription>
              {" "}
              Add your gallery photos into yourr albums.{" "}
            </DialogDescription>
          ) : (
            <DialogDescription>
              {" "}
              Create albums for your gallery photos.{" "}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Album name"
              className="col-span-3"
              required
              onChange={(e) => setAlbum(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          {!create ? (
            <Button
              type="submit"
              onClick={() => {
                  addToAlbum(album, image.public_id).then(()=>{
                    setDialog(false);
                  toast.success("Added to album :)");
                  }).catch (error => {
                  console.log(error);
                  toast.error("Album not Found :(");
                });
              }}
            >
              Save changes{" "}
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={() => {
                createAlbum(album);
                setDialog(false);
                toast.success("Album created successfully :)");
                // toast({
                //     title:"Album created successfully:)",
                //   description:"Your album has been created.",
                // })
              }}
            >
              Create Album{" "}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
