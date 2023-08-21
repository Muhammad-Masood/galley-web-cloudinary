import { ImageCard } from "@/components/ImageCard";
import { ImageUpload } from "@/components/ImageUpload";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { getRootFolders, getSubFolders } from "../albums/album-api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/ui/search";

export type ImageData = {
  public_id: string;
  tags: string[];
};

const Gallery = async ({searchParams:{tag}}:{searchParams:{tag:string}}) => {
  
  const imagesData = (await cloudinary.v2.search
    .expression(`resource_type:image ${tag?` AND tags=${tag}`:''}`)
    .sort_by("created_at", "desc")
    .max_results(10)
    .with_field("tags")
    .execute()) as { resources: ImageData[] };
  revalidatePath("/gallery");

  // const subFol = await getSubFolders("Hello");
  // console.log(subFol);

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="mb-1 px-4 text-4xl font-bold tracking-normal">
          Gallery
        </h2>
        <ImageUpload />
      </div>
      <Search initialSearch={tag}/>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3">
        {imagesData.resources.map((image: ImageData) => (
          // <Link href={`/gallery/${image.public_id}`} key={index}>
          <div key={image.public_id}>
            <ImageCard
              imageprops={image}
              width={400}
              height={300}
              alt="cloudinary_image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
