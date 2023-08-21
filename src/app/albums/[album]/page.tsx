

import { getImagesFromFolder } from "../album-api";
import { ImageCard } from "@/components/ImageCard";
import cloudinary from "cloudinary";
import { ImageData } from "@/app/gallery/page";

const Page = async ({params}:{params:{album:string}}) => {
    // const images = await getImagesFromFolder(params.album);
    const images = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${params.album}`)
        .sort_by("created_at", "desc")
        .max_results(10)
        .with_field("tags")
        .execute()) as { resources: ImageData[] };

  return (
    <div>
      <h2 className="mb-2 px-4 text-4xl font-bold tracking-normal">{params.album}</h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
      {
        images.resources.map((image:ImageData) => (
            <div key={image.public_id}>
            <ImageCard
            imageprops={image}
            width={400}
            height={300}
            alt="cloudinary_image"
            />
            </div>
        ))
      }
      </div>
      </div>
  )
}

export default Page;