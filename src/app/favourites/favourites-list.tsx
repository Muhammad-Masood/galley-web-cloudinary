"use client";
import { useState } from "react";
import { ImageData } from "../gallery/page";
import { ImageGrid } from "@/components/ImageGrid";
import { ImageCard } from "@/components/ImageCard";

//Server Component

export function FavouritesList ({initialResources}:{initialResources:ImageData[]}) {
  const MAX_COLUMNS = 4;
  const getColumn = (columnIndex: number) => {
    return initialResources.filter(
      (image, index) => index % MAX_COLUMNS === columnIndex
    );
  };
  const [resources,setResources] = useState(initialResources);
  return (
    <div>
      {initialResources.length>0? 
      (<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3">
        {[getColumn(0), getColumn(1), getColumn(2), getColumn(3)].map((imagesData, index) =>
        <div className="flex flex-col gap-4" key={index}>
        {
          imagesData.map((image: ImageData) => (
              <div key={image.public_id}>
              <ImageCard
                imageprops={image}
                width={400}
                height={300}
                alt="cloudinary_image"
                onUnHeart={(unHeartResource:ImageData) => {
                  setResources((currentResources) => currentResources.filter((resource) => resource.public_id!==unHeartResource.public_id))
                }}
              />
              </div>
          ))
        }
        </div>
        )}
      </div> ) : 
       <h1 className="text-2xl font-semibold">No Favourite Images</h1>
      }
    </div>
  );
};

export default FavouritesList;
