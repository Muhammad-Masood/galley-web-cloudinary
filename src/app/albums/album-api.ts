"use server"

import cloudinary from "cloudinary"; 

// type folder ={
//     names:string[]
// }

export type RootFolder = {
    folders: {
            name:string
    } []
}

export async function addToAlbum(folderName:string,public_id:string) {
    // await cloudinary.v2.api.create_folder(`${folderName}/${public_id}`);
    await cloudinary.v2.uploader.rename(public_id,`${folderName}/${public_id}`);
}

export async function getRootFolders() {
    const folds:RootFolder = await cloudinary.v2.api.root_folders();
    return folds;
}

export async function getSubFolders(rootFolder:string) {
    const subFolds = await cloudinary.v2.api.sub_folders(rootFolder);
    return subFolds;
}

export async function getImagesFromFolder() {
    
}