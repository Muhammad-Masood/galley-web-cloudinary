"use client";

import "../app/globals.css";
import { Button } from "./ui/button";
import { BiLogoFacebookCircle, BiPhotoAlbum } from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoAlbumsOutline } from "react-icons/io5";
import { FcStackOfPhotos } from "react-icons/fc";
import { ThemeChanger } from "./ThemeChanger";
import { BsDiscord } from "react-icons/bs";

export const SideBar = () => {

  const buttons = [
    { name: "Gallery", path:"/gallery",icon:<BiPhotoAlbum className="icons" />},
    { name: "Albums", path:"/albums",icon:<IoAlbumsOutline className="icons" />},
    { name: "Favourites", path:"/favourites",icon:<AiOutlineHeart className="icons" />},
  ];

  const [onPage, setOnPage] = useState("");
  const handleSetOnPage = (buttonName:string) => {
    setOnPage(buttonName);
  };

  return (
    <div className="space-y-10 py-44 w-1/5 pl-6 hidden lg:block">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <p className="text-4xl font-bold">Photon</p>
          <FcStackOfPhotos className="w-10 h-10" />
        </Link>
      </div>

      <div className="space-y-6">
        <div className="space-y-1">
          {buttons.map((button) => (
            <div key={button.path}>
              <Link href={button.path}>
                <Button
                  variant={`${onPage===button.name ? "secondary" : "ghost"}`}
                  className="w-full justify-start gap-x-1 font-mono font-semibold text-xl"
                  onClick={() => handleSetOnPage(button.name)}
                >
                  {button.icon}
                  {button.name}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      
        <div className="flex gap-8 items-center">
          <Link href="https://www.linkedin.com/in/muhammad-masood-b9a091248/" target="_blank">
            <AiFillLinkedin className="w-4 h-4 " />
          </Link>
          <Link href="https://github.com/Muhammad-Masood" target="_blank">
            <AiFillGithub className="w-4 h-4 " />
          </Link>
          <Link href="https://discord.com/channels/yoursourcecoder" target="_blank">
            <BsDiscord className="" />
          </Link>
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
};
