"use server"

import cloudinary from "cloudinary"

export async function addIntoFavourites (public_id:string) {
    console.log(public_id);
    await cloudinary.v2.uploader.add_tag("favourite",[public_id]);
}

export async function removeFromFavourites (public_id:string) {
    console.log(public_id);
    await cloudinary.v2.uploader.remove_tag("favourite",[public_id]);
}