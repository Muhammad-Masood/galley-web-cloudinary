"use client";

import "../app/globals.css";
import { Button } from "./ui/button";
import { BiLogoFacebookCircle, BiPhotoAlbum } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlbumCollapsible } from "./ui/albumCollapse";
import { getRootFolders, RootFolder } from "../app/albums/album-api";
import { useEffect } from "react";
import { IoAlbumsOutline } from "react-icons/io5";
import { FcStackOfPhotos } from "react-icons/fc";
import { TbBrandGooglePhotos } from "react-icons/tb";
import { ThemeChanger } from "./ThemeChanger";
import { BsDiscord } from "react-icons/bs";

export const SideBar = () => {
  const pathName = usePathname();
  
  return (
    <div className="space-y-10 py-36 w-1/5 pl-6 hidden lg:block">

      <div>
        <Link href="/" className="flex items-center gap-2">
          <p className="text-4xl font-bold">Photon</p>
          <FcStackOfPhotos className="w-10 h-10" />
        </Link>
        </div>

        <div className="space-y-6">

        <div className="space-y-1">

          <div>
            <Link href="/gallery">
              <Button
                variant={`${pathName == "/gallery" ? "secondary" : "ghost"}`}
                className="w-full justify-start gap-x-1 font-mono font-semibold text-lg"
              >
                <BiPhotoAlbum className="icons" />
                Gallery
              </Button>
            </Link>
          </div>

          <div>
            <Link href="/albums">
              <Button
                variant={`${pathName == "/albums" ? "secondary" : "ghost"}`}
                className="w-full justify-start gap-x-2 font-mono font-semibold text-lg"
              >
                <IoAlbumsOutline className="icons" />
                Albums
              </Button>
              {/* <AlbumCollapsible /> */}
            </Link>
          </div>

          <div>
            <Link href="/favourites">
              <Button
                variant={`${pathName == "/favourites" ? "secondary" : "ghost"}`}
                className="w-full justify-start gap-x-2 font-mono font-semibold text-lg"
              >
                <AiOutlineHeart className="icons" />
                Favourites
              </Button>
            </Link>
          </div>

          </div>

          <div className="flex gap-8 items-center">
            <Link href="/">
              <AiFillLinkedin className="w-4 h-4 " />
            </Link>
            <Link href="/">
              <AiFillGithub className="w-4 h-4 " />
            </Link>
            <Link href="/">
              <BsDiscord className="" />
            </Link>
            <ThemeChanger />
          </div>

          </div>

    </div>
  );
};
