'use client'

import { Button } from "@/components/ui/button";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";


type effectsTypes = "generative_fill"|"remove_background"|"grayscale";

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
    name:"Grayscale",
    type:"grayscale"
  },
  {
    name:"Tint",
    type:"tint"
  }
]

const page = ({params}:{params:{publicId:string}}) => {

  const [transformation,setTransformation] = useState<undefined|string>();

  return (
    <div className="space-y-6">
       <h2 className="mb-2 text-4xl font-bold tracking-normal">Edit {params.publicId}</h2>
       <div className="flex gap-4">
        {effects.map((effect) => (
          <Button onClick={() => {setTransformation(effect.type)}}>{effect.name}</Button>
        ))}
        {/* <Button onClick={() => {
        setTransformation("generative_fill");
       }}>Clear All</Button>
       <Button onClick={() => {
        setTransformation("generative_fill");
       }}>Generative Fill</Button>
       <Button onClick={() => {
        setTransformation("grayscale");
       }}>Grayscale</Button>
       <Button onClick={() => {
        setTransformation("remove_background");
       }}>Background Remove</Button> */}
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-2">
      <CldImage 
      width={400}
      height={300}
      src={params.publicId}
      alt="image_view"
      />
      {
        transformation==="generative_fill" && 
        <CldImage
        width={400}
        height={300}
        src={params.publicId}
        alt="image_view"
        fillBackground
        />
      }
      {
        transformation==="remove_background" && 
        <CldImage
        width={400}
        height={300}
        src={params.publicId}
        alt="image_view"
        removeBackground
        />
      }
      {
        transformation==="grayscale" && 
        <CldImage
        width={400}
        height={300}
        src={params.publicId}
        alt="image_view"
        grayscale
        />
      }
      {
        transformation==="tint" && 
        <CldImage
        width={400}
        height={300}
        src={params.publicId}
        alt="image_view"
        tint="equalize:80:blue:blueviolet"
        />
      }
      </div>
    </div>
  )
}

export default page;