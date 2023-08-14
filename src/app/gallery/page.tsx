import { ImageCard } from "@/components/ImageCard";
import { ImageUpload } from "@/components/ImageUpload";
import cloudinary from "cloudinary";
import Link from "next/link";

type ImageData = {
  public_id:string
};

const page = async () => {
  const imagesData =  await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('public_id','desc')
  .max_results(10)
  .execute() as {resources: ImageData[]}

  return (
    <div>
    <div className="flex justify-between">
      <h2 className="mb-2 px-4 text-4xl font-bold tracking-normal">Gallery</h2>
      <ImageUpload />
    </div>
    <div className="grid grid-cols-4 gap-4">
    {
      imagesData.resources.map((image:ImageData,index) => (
        <Link href={`/gallery/${image.public_id}`}>

        <ImageCard
        key={index}
        src={image.public_id}
        width={400}
        height={300}
        alt="cloudinary_image"
        />
        </Link>
      ))
    }
    </div>
    </div>
  );
};

export default page;
