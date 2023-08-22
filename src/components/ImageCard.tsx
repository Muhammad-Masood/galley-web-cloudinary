"use client";

import {
  addIntoFavourites,
  removeFromFavourites,
} from "@/app/gallery/manage-tags";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

export const ImageCard = (props: any & {onUnHeart:(unHeartResource:ImageData)=>void} ) => {
  const { imageprops,className } = props; 
  const [favourite,setFavourite] = useState(imageprops.tags.includes("favourite"));
  const {onUnHeart} = props;
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }); 
  return (
    <div className="relative gap-4 object-cover">
      <div className="absolute right-2 top-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiOutlineMenuAlt4 className="w-5 h-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="gap-x-1" asChild>
              <AddToAlbum image={imageprops} />
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-x-1" asChild>
              <Edit id={imageprops.public_id}/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* {
          dialog&&<AddToAlbum onClose={closeDialog}/>
        } */}
      {!favourite ? (
        <BsHeart
          className="w-5 h-5 left-2 top-2 absolute cursor-pointer transition ease-in-out hover:scale-125 duration-200  "
          onClick={async () => {
            setFavourite(true);
            await addIntoFavourites(imageprops.public_id);
            router.refresh();
          }}
        />
      ) : (
        <BsHeartFill
          className="w-5 h-5 left-2 top-2 cursor-pointer absolute transition ease-in-out hover:scale-125 duration-200"
          onClick={async () => {
              onUnHeart(imageprops);
            setFavourite(false);
            await removeFromFavourites(imageprops.public_id);
            router.refresh();
          }}
        />
      )}
      <CldImage {...props} src={imageprops.public_id} />
    </div>
  );
};
