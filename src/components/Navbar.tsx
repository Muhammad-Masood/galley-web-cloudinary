import { BiPhotoAlbum } from "react-icons/bi";
import { ThemeChanger } from "./ThemeChanger";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {AiOutlineHeart, AiOutlineMenu} from "react-icons/ai";
import Link from "next/link";
import { IoAlbumsOutline } from "react-icons/io5";
import { FcStackOfPhotos } from "react-icons/fc";

export const Navbar = () => {
  return (
    <div className="flex justify-between lg:hidden">
      <Link href="/ " className="flex items-center gap-2"><p className="text-3xl font-bold">Photon</p><FcStackOfPhotos className="w-8 h-8"/></Link>
      <div className="flex gap-x-6 items-center">
       <div className="block md:hidden sm:hidden">
       <Sheet>
         <SheetTrigger asChild>
           <AiOutlineMenu className="cursor-pointer"/>
         </SheetTrigger>
         <SheetContent side="left">
           <SheetHeader>
            <SheetTitle>Manage</SheetTitle>
           </SheetHeader>
           <div className="space-y-3 p-2 mt-4">
          <div>
          <Link href="/gallery">
            <div className="w-full justify-start gap-x-1 flex items-center">
              <BiPhotoAlbum className="icons" />
              <p className="font-normal tracking-wide text-lg">Gallery</p>
            </div>
          </Link>
          </div>

          <div>
          <Link href="/albums">
            <div className="w-full justify-start gap-x-2 flex items-center">
              <IoAlbumsOutline className="icons" />
              <p className="font-normal tracking-wide text-lg">Albums</p>
            </div>
          </Link>
          </div>

          <div>
          <Link href="/favourites">
            <div className="w-full justify-start gap-x-2 flex items-center">
              <AiOutlineHeart className="icons" />
              <p className="font-normal tracking-wide text-lg">Favourites</p>
            </div>
          </Link>
          </div>
          </div>
         </SheetContent>
       </Sheet>
     </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ThemeChanger />
      </div>
    </div>
  );
};
