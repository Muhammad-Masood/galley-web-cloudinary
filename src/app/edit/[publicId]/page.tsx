"use client"
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const effects = [
  {
    name:"Clear All",
    type:undefined
  },
  {
    name:"Generative Fill",
    type:"generative_fill"
  },
  {
    name:"Remove Background",
    type:"remove_background"
  },
  {
    name:"Gravity",
    type:"gravity"
  },
  // {
  //   name:"Tint",
  //   type:"tint"
  // }
]

const Page = ({ params }: { params: { publicId: string } }) => {
  const [transformation,setTransformation] = useState<undefined|string>();
  // const [grayscaleImage,setGrayscaleImage] = useState("");
  // console.log(params.publicId);
  // const handleGrayscaleEffect = () => {
  //   const gscImage = applyGrayscale(params.publicId);
  //   console.log(gscImage);
  // }

  // useEffect(()=> {
  //   const imageUrl = cloudinary.v2.image(params.publicId,{transformation : [
  //     {effect:"grayscale"}
  //   ]});
  //   setGrayscaleImage(imageUrl);
  //   console.log(grayscaleImage);
  // },[])
    

  return (
    <div className="space-y-6">
      <h2 className="mb-2 text-4xl font-bold tracking-normal">
        Edit {params.publicId}
      </h2>
      <div className="flex gap-4">
        {effects.map((effect) => (
          <Button key={effect.type} onClick={() => {
            setTransformation(effect.type);
   
          }}>{effect.name}</Button>
        ))}
       </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-6">
        <CldImage
          width={490}
          height={300}
          src={params.publicId}
          alt="image_view"
        />
        {
        transformation==="generative_fill" && 
        <CldImage
        width={490}
        height={300}
        src={params.publicId}
        alt="image_view"
        fillBackground
        />
      }
      {
        transformation==="remove_background" && 
        <CldImage
        width={490}
        height={300}
        src={params.publicId}
        alt="image_view"
        removeBackground
        />
      }
      {
        transformation==="gravity" && 
        <CldImage 
        width={490}
        height={300}
        src={params.publicId}
        alt="image_view"
        gravity="auto"
        // tint="equalize:80:blue:blueviolet"
        />
      }
      {
        transformation==="tint" && 
        <CldImage
        width={490}
        height={300}
        src={params.publicId}
        alt="image_view"
        // pixelate
        />
      }
      </div>
    </div>
  );
};

export default Page;
