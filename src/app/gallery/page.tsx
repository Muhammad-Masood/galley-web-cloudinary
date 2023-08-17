import { ImageCard } from "@/components/ImageCard";
import { ImageUpload } from "@/components/ImageUpload";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { getRootFolders, getSubFolders } from "../albums/album-api";

export type ImageData = {
  public_id: string;
  tags: string[];
};

const Gallery = async () => {
  const imagesData = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .with_field("tags")
    .execute()) as { resources: ImageData[] };
  revalidatePath("/gallery");

  // const subFol = await getSubFolders("Hello");
  // console.log(subFol);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-2 px-4 text-4xl font-bold tracking-normal">
          Gallery
        </h2>
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

export default Gallery;
