import axios from "axios";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

export async function GET () {
    try{
    // const response:Response = await cloudinary.v2.search
    // .expression('resource_type:image AND tags=kitten AND uploaded_at>1d AND bytes>1m')
    // .sort_by('public_id','desc')
    // .max_results(30)
    // .execute();
    // console.log(response);
    // return new Response(await response.json());
    } catch(error){
        console.log(error);
        return new NextResponse(JSON.stringify(error));
    }

}