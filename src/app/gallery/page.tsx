'use client'

import {LuUploadCloud} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";

type ImageData = {
  info: {
    public_id: string;
  };
  events?: "success";
};

const page = () => {
  return (
    <div className="flex justify-between">
      <h2 className="mb-2 px-4 text-4xl font-bold tracking-tight">Gallery</h2>
  
      <Button asChild>
        <div className="flex gap-x-1">
          <LuUploadCloud className="icons"/>
        <CldUploadButton
          uploadPreset="vn04oe6t"
          onUpload={(results) => {
            const data: ImageData = results as ImageData;
            console.log(data.info.public_id);
          }}
        />
        </div>
      </Button>
      
    </div>
  );
};

export default page;
