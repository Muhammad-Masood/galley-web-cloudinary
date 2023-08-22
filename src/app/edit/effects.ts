"use server"

import cloudinary from "cloudinary";

// export function generativeFill(publicId:string){
//     cloudinary.v2.image(publicId, {aspect_ratio: "16:9", background: "gen_fill", crop: "pad"} )
// }

export function applyGrayscale(publicId:string){
    const cl = cloudinary.v2.image(publicId,{transformation : [
        {effect:"grayscale"}
      ]})
      console.log(cl);
      return cl;
}