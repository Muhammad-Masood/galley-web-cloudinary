'use client'

import "../app/globals.css";
import { Button } from "./ui/button";
import { BiPhotoAlbum } from "react-icons/bi";
import { IoAlbumsOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from 'next/navigation'


export const SideBar = () => {
    const pathName = usePathname();

  return (
    <div className="space-y-4 py-4 w-max">
      <div className="py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Manage
        </h2>
        <div className="space-y-1">
          <div>
          <Link href="/gallery">
            <Button
              variant={`${pathName == '/gallery'?'secondary':'ghost'}`}
              className="w-full justify-start gap-x-1"
            >
              <BiPhotoAlbum className="icons" />
              Gallery
            </Button>
          </Link>
          </div>

          <div>
          <Link href="/albums">
            <Button variant={`${pathName == '/albums'?'secondary':'ghost'}`} className="w-full justify-start gap-x-2">
              <IoAlbumsOutline className="icons" />
              Albums
            </Button>
          </Link>
          </div>

          <div>
          <Link href="/favourites">
            <Button variant={`${pathName == '/favourites'?'secondary':'ghost'}`} className="w-full justify-start gap-x-2">
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
