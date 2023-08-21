"use client";

import {
  addIntoFavourites,
  removeFromFavourites,
} from "@/app/gallery/manage-tags";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsHeart, BsHeartFill, BsFolderSymlink } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
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
import { AddToAlbum } from "./ui/addAlbum";
// import { AddToAlbum } from "./ui/addAlbum";
import { FiEdit2 } from "react-icons/fi";
import Link from "next/link";
import { Edit } from "./ui/edit";

export const ImageCard = (props: any) => {
  const { imageprops } = props;
  const isFavourite: boolean = imageprops.tags.includes("favourite");
  const router = useRouter();

  // const openDialog = () => setDialog(true);
  // const closeDialog = () => setDialog(false);
  // console.log(dialog);
  return (
    <div className="relative gap-4">
      <div className="absolute right-2 top-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiOutlineMenuAlt4 className="w-5 h-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="gap-x-1" asChild>
              <AddToAlbum imageprops={imageprops} />
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-x-1" asChild
            >
              <Edit id={imageprops.public_id}/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* {
          dialog&&<AddToAlbum onClose={closeDialog}/>
        } */}
      {!isFavourite ? (
        <BsHeart
          className="w-5 h-5 left-2 top-2 absolute cursor-pointer transition ease-in-out hover:scale-125 duration-200  "
          onClick={async () => {
            await addIntoFavourites(imageprops.public_id);
            router.refresh();
          }}
        />
      ) : (
        <BsHeartFill
          className="w-5 h-5 left-2 top-2 cursor-pointer absolute transition ease-in-out hover:scale-125 duration-200"
          onClick={async () => {
            await removeFromFavourites(imageprops.public_id);
            router.refresh();
          }}
        />
      )}
      <CldImage {...props} src={imageprops.public_id} />
    </div>
  );
};
