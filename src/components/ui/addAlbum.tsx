"use client";
import { addToAlbum } from "@/app/albums/album-api";
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

export function AddToAlbum({ imageprops }: { imageprops: ImageData }) {
  const [dialog, setDialog] = useState(false);
  const [album, setAlbum] = useState("");

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
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Create albums for your gallery photos.
          </DialogDescription>
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
          <Button
            type="submit"
            onClick={() => {
              addToAlbum(album, imageprops.public_id);
              setDialog(false);
            }}
          >
            Save changes{" "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
