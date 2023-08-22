"use server";

import { ImageCard } from "@/components/ImageCard";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { ImageData } from "../gallery/page";
import { ImageGrid } from "@/components/ImageGrid";
import FavouritesList from "./favourites-list";

//Server Component

const page = async () => {
  const favouriteImages = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .max_results(10)
    .with_field("tags")
    .execute()) as { resources: ImageData[] };
    revalidatePath("/favourites");

  return (
    <div>
      <h2 className="mb-2 px-4 text-4xl font-bold tracking-normal">
        Favourites
      </h2>
      {favouriteImages.resources.length>0? <FavouritesList initialResources={favouriteImages.resources}/> :
       <h1 className="text-2xl font-semibold">No Favourite Images</h1>
      }
    </div>
  );
};

export default page;
