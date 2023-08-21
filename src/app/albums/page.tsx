import { RootFolder, getRootFolders, getSubFolders } from "./album-api";
import { AlbumCard } from "@/components/AlbumCard";

export type ImageData = {
  public_id: string;
  tags: string[];
};

const Albums = async () => {
const folders = await getRootFolders();
 return (
    <div>
      <h2 className="mb-2 px-4 text-4xl font-bold tracking-normal">Albums</h2>
      <div className="flex flex-wrap gap-4">
      {
          folders.map((f,index)=>(
          <AlbumCard key={index} folder={f}/>
        ))
      }
      </div>
    </div>
  );
};

export default Albums;
