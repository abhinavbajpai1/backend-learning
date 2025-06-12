import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; 

const app =express();

app.use(express.json({
    limit:"50mb"
}));
app.use(cookieParser());
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
app.use(express.urlencoded({
    limit:"50mb",
    extended:true
}));
appp.use(express.static("public"));
app.use(cookieParser())


export{app};