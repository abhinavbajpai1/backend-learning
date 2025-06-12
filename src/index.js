// this is a problem when working with common js =>   require ('dotenv').config({path:'./env'})

import dotenv from 'dotenv';

import { CONNECTDB } from "./db/index.js";
import express from "express";

const app = express();

dotenv.config({
    path:'./env'
})


CONNECTDB().then((result) => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on port ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("MONGODB CONNECTION FAILED",err);
});



















// import express from "express";

// const app=express();

// (async()=>{
//     try{
//         await mongoose.connect($`{process.env.MONGODB_URL}/${DB_NAME}`);
//         console.log("Database connected");
//         app.on("error",(error)=>{
//             console.log("Database connection failed");
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is listening on port ${process.env.PORT}`);
//         })

//     }
//     catch(error){
//         console.log(error);
//         throw new Error("Database connection failed");
//     }
    
// })()
