import { ImageCard } from "@/components/ImageCard";
import { ImageUpload } from "@/components/ImageUpload";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { Search } from "@/components/ui/search";
import { ImageGrid } from "@/components/ImageGrid";

export type ImageData = {
  public_id: string;
  tags: string[];
};

const Gallery = async ({
  searchParams: { tag },
}: {
  searchParams: { tag: string };
}) => {
  
  const imagesData = (await cloudinary.v2.search
    .expression(`resource_type:image ${tag ? ` AND tags=${tag}` : ""}`)
    .sort_by("created_at", "desc")
    .max_results(15)
    .with_field("tags")
    .execute()) as { resources: ImageData[] };
  revalidatePath("/gallery");
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="mb-1 px-4 text-4xl font-bold tracking-normal">
          Gallery
        </h2>
        <ImageUpload />
      </div>
      <Search initialSearch={tag} byTag={true} />
      <ImageGrid images={imagesData.resources}/>
    </div>
  );
};

export default Gallery;
