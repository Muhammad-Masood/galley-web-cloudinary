import { BiPhotoAlbum } from "react-icons/bi";
import { IoAlbumsOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

