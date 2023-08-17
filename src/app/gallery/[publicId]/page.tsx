'use client'

import { ImageCard } from "@/components/ImageCard";
import { useParams } from "next/navigation";

const page = () => {
  const { publicId } = useParams();

  return (
    <div>
       <h2 className="mb-2 px-4 text-4xl font-bold tracking-normal">Edit</h2>
      <ImageCard 
      width={600}
      height={600}
      src={publicId}
      alt="image_view"
      />
    </div>
  )
}

export default page;