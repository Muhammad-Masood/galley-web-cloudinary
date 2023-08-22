"use server";

import cloudinary from "cloudinary";

export type RootFolder = {
  folders: {
    name: string;
  }[];
};

export type Folder = {
  name:string;
}

export async function addToAlbum(folderName: string, public_id: string) {
  try{
  const folderFound = await searchFolder(folderName);
  if(folderFound){
    await cloudinary.v2.uploader.rename(public_id, `${folderName}/${public_id}`);
  } else{
    throw new Error("folder not found");
  }} catch(error){
    console.log(error);
    throw error;
  }
}

export async function createAlbum(folderName: string) {
  try{
    await cloudinary.v2.api.create_folder(folderName);
  } catch(error){
    console.log(error);
  }
}

export async function searchFolder(folderName:string){
    const folders = await getRootFolders();
    const folder = folders.filter(f => f.name == folderName);
    return folder;
}

export async function findFolder(name?:string){
  if(name){
    const folder = await searchFolder(name);
    return folder;
  } else {
    const folders = await getRootFolders();
    return folders;
  }
} 

export async function getRootFolders() {
  const {folders} = await cloudinary.v2.api.root_folders() as RootFolder;
  return folders;
}

export async function getSubFolders(rootFolder: string) {
  const subFolds = await cloudinary.v2.api.sub_folders(rootFolder);
  return subFolds;
}

export async function getImagesFromFolder(folder: string) {
  const albumImages = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${folder}`)
    .sort_by("created_at", "desc")
    .max_results(10)
    .with_field("tags")
    .execute()) as { resources: ImageData[] };
    return albumImages;
}
