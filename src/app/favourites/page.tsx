'use server'

import { ImageCard } from "@/components/ImageCard"
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

//Server Component 

const page = async () => {

  const favouriteImages = await cloudinary.v2.search
  .expression('resource_type:image AND tags=favourite')
  .sort_by('created_at','desc')
  .max_results(10)
  .with_field('tags')
  .execute() as {resources: ImageData[]}
  revalidatePath(`/favourites`);

  return (
    <div>
      <h2 className="mb-2 px-4 text-4xl font-bold tracking-normal">Favourites</h2>
      <div className="grid grid-cols-4 gap-4">
        {favouriteImages.resources.map((image:ImageData,index) => (
          <ImageCard
          imageprops={image}
          width={400}
          height={300}
          alt="cloudinary_image"
          />
        ))}
      </div>
    </div>
  )
}

export default page;