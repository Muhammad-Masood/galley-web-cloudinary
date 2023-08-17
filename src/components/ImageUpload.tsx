'use client'

import { LuUploadCloud } from "react-icons/lu";
import { Button } from "./ui/button";
import { CldUploadButton } from "next-cloudinary";

export const ImageUpload = () => {
  return (
    <div>
        <Button asChild> 
        <CldUploadButton uploadPreset="vn04oe6t" className="flex gap-x-1"><LuUploadCloud className="icons"/><p>Upload</p></CldUploadButton>
        </Button>
    </div>
  )
}
