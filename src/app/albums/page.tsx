import { ImageCard } from "@/components/ImageCard";
import { ImageUpload } from "@/components/ImageUpload";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { getRootFolders, getSubFolders } from "./album-api";

export type ImageData = {
  public_id: string;
  tags: string[];
};

const Albums = async () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-2 px-4 text-4xl font-bold tracking-normal">Albums</h2>
        <ImageUpload />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
        {imagesData.resources.map((image: ImageData, index) => (
          // <Link href={`/gallery/${image.public_id}`} key={index}>
          <ImageCard
            imageprops={image}
            width={400}
            height={300}
            alt="cloudinary_image"
          />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Albums;
