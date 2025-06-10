// this is a problem when working with common js =>   require ('dotenv').config({path:'./env'})

import dotenv from 'dotenv';

dotenv.config({
    path:'./env'
})






















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
