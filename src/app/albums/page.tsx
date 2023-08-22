import { Search } from "@/components/ui/search";
import { Folder, RootFolder, findFolder, getRootFolders, getSubFolders, searchFolder } from "./album-api";
import { AlbumCard } from "@/components/AlbumCard";
import cloudinary from "cloudinary"

export type ImageData = {
  public_id: string;
  tags: string[];
};

const Albums = async ({searchParams:{name}}:{searchParams:{name:string}}) => {
  const folders:Folder[] = await findFolder(name);

  return (
    <div className="space-y-7">
      <h2 className="mb-2 px-4 text-4xl font-bold tracking-normal">Albums</h2>
       <Search byTag={false}/>
      <div className="flex flex-wrap gap-6">
      { folders.length>0?
          (folders.map((f,index)=>(
          <div key={index}>
          <AlbumCard folder={f}/>
          </div>
        ))) :
        <h1 className="text-2xl font-semibold">No Albums Created</h1>
      }
      </div>
    </div>
  );
    }

export default Albums;
