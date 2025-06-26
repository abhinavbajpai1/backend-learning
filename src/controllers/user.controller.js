import {asynchandler} from "../utils/asynchandler.js";
import {User} from "../models/user.model.js";
import {Apierror} from "../utils/api.error.js";
import {uploadONCloudinary} from "../utils/cloudinary.js";
import ApiREsponse from "../utils/ApiResponse.js";


const registeruser= asynchandler(async (req,res,next)=>{
    // get user data from req.body 
    // validation of user data -not empty
    // check if user already exists: username or email
    // check for images and check for avatar 
    // if exists then upload to cloudinary
    // create user in db 
    // remove password and refresh token field from response 
    // check for user creation success
    // send response 

    const {fullname,username,email,password}=req.body;

    if(!fullname || !username || !email || !password){
        return next(new Apierror(400,"All fields are required"));
    }
    const user = await User.findOne({email});
    if(user){
        return next(new Apierror(400,"User already exists"));
    }
    const avatar = await uploadONCloudinary(req.files.avatar[0].path);
    const cover = await uploadONCloudinary(req.files.cover[0].path);
    const NEWuser = await User.create({
        fullname,
        username,
        email,
        password,
        avatar:avatar.secure_url,
        cover:cover.secure_url

    
    })
    NEWuser.findByIdAndRemove("password","refreshToken").select("-password -refreshToken");
    if(!NEWuser){
        return next(new Apierror(400,"User creation failed"));
    }
    return res.status(201).json(new ApiREsponse(201,"User created successfully",NEWuser));
})

export {registeruser};