import cloudinary from "cloudinary";

export function generativeFill(publicId:string){
    cloudinary.v2.image(publicId, {aspect_ratio: "16:9", background: "gen_fill", crop: "pad"} )
}