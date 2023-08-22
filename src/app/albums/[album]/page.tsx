import { getImagesFromFolder } from "../album-api";
import { ImageCard } from "@/components/ImageCard";
import cloudinary from "cloudinary";
import { ImageData } from "@/app/gallery/page";
import { ImageGrid } from "@/components/ImageGrid";

const Page = async ({params}:{params:{album:string}}) => {
    // const images = await getImagesFromFolder(params.album);
    const images = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${params.album}`)
        .sort_by("created_at", "desc")
        .max_results(15)
        .with_field("tags")
        .execute()) as { resources: ImageData[] };
        console.log(images);
  
  return (
    <div>
      <h2 className="mb-4 px-4 text-4xl font-bold tracking-normal">{params.album}</h2>      
      { images.resources.length!==0?
        <ImageGrid images={images.resources}/> : 
        <div className="flex text-center items-center justify-center"><h1 className="text-2xl font-semibold text-center">No Photos Found</h1></div>
      }
      </div>
  )
}

export default Page;