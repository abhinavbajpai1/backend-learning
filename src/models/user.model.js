import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { use } from "react";

const UserSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true

    },
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        
    },
    fullname :{
        type : String,
        required : true,
        trim : true,
        index : true
    },
    avatar :{
        type : String, // cloudinary
        trim : true,
        required : true

    },
    coverImage :{
        type : String, // cloudinary
        trim : true,
        required : true
    },
    watchHistory :[{
        type : Schema.Types.ObjectId,
        ref : "Video"
    }],
    password :{
        type : String,
        required :[true,"Password is required"] , 
    },
    isVerified :{
        type : Boolean,
        default : false
    },
    isAdmin :{
        type : Boolean,
        default : false
    },
    refreshToken :{
        type : String
    }



},{timestamps:true})

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
})
UserSchema.methods.isPasswordCorrect =async function(password){
    return await bcrypt.compare(password,this.password);
}

UserSchema.methods.generateAccessToken = function(){
    return jwt.sign({userId : this._id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY})
}
UserSchema.methods.generateRefreshToken = function(){
    return jwt.sign({userId : this._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}


export const User = mongoose.model("User",UserSchema)