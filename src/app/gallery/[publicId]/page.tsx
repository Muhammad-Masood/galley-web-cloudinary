'use client'

import { ImageCard } from "@/components/ImageCard";
import { useParams } from "next/navigation";

const page = () => {
  const { publicId } = useParams();

  return (
    <div>
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