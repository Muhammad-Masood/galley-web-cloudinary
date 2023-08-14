'use client'

import { LuUploadCloud } from "react-icons/lu";
import { Button } from "./ui/button";
import { CldUploadButton } from "next-cloudinary";

export const ImageUpload = () => {
  return (
    <div>
        <Button asChild>
        <div className="flex gap-x-1">
          <LuUploadCloud className="icons"/>
        <CldUploadButton uploadPreset="vn04oe6t" />
        </div>
        </Button>
    </div>
  )
}
