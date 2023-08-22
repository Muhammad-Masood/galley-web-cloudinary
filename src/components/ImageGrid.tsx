import { ImageData } from "@/app/gallery/page"
import { ImageCard } from "./ImageCard";


const MAX_COLUMNS = 4;
export const ImageGrid = ({images}:{images:ImageData[]}) => {
    
    const getColumn = (columnIndex: number) => {
        return images.filter(
          (image, index) => index % MAX_COLUMNS === columnIndex
        );
      };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3">
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
              />
              </div>
          ))
        }
        </div>
        )}
      </div>
  )
}
