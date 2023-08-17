"use server"

import cloudinary from "cloudinary";

export const searchFavouriteImages = async () => {
    const favouriteImages = await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .max_results(10)
  .with_field('tags')
  .execute() as {resources: ImageData[]}
  return favouriteImages;
}