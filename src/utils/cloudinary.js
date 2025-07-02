import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name:  process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_key,
  api_secret:process.env.CLOUDINARY_SECRET
});

const uploadONCloudinary = async (localFilepath)=>{
    try {
        if(!localFilepath) return null
        const response= await cloudinary.uploader.upload(localFilepath,{
            resource_type:"auto"
        })
        console.log("file uploaded successfully",response.url);
        fs.unlinkSync(localFilepath)
        return response;
    } catch (error) {
        fs.unlink(localFilepath)
    }
}
export {uploadONCloudinary};