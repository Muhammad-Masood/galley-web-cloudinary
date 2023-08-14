'use client'

import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import { AiOutlineHeart } from "react-icons/ai";

export const ImageCard = (props:any) => {

  return (
    <div className="">
        <CldImage {...props}/>
        <AiOutlineHeart className="w-5 h-5 absolute"/>
    </div>
  )
}
