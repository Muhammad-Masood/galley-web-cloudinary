"use client";

import "../app/globals.css";
import { Button } from "./ui/button";
import { BiPhotoAlbum } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlbumCollapsible } from "./ui/albumCollapse";
import { getRootFolders, RootFolder } from "../app/albums/album-api";
import { useEffect } from "react";

export const SideBar = () => {
  const pathName = usePathname();

  // const rootFolders: RootFolder = getRootFolders();
  // rootFolders.folders.map((f) => (
  //   console.log(f.name)
  // ))

  return (
    <div className="space-y-4 py-4 w-1/6 hidden md:block">
      <div className="py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Manage
        </h2>
        <div className="space-y-1">
          <div>
            <Link href="/gallery">
              <Button
                variant={`${pathName == "/gallery" ? "secondary" : "ghost"}`}
                className="w-full justify-start gap-x-1"
              >
                <BiPhotoAlbum className="icons" />
                Gallery
              </Button>
            </Link>
          </div>

          <div>
            {/* onAlbumMenu={pathName=='/albums'} */}
            <Link href="/albums">
              <AlbumCollapsible />
            </Link>
          </div>

          <div>
            <Link href="/favourites">
              <Button
                variant={`${pathName == "/favourites" ? "secondary" : "ghost"}`}
                className="w-full justify-start gap-x-2"
              >
                <AiOutlineHeart className="icons" />
                Favourites
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
