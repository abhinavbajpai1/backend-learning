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
app.use(express.static("public"));
app.use(cookieParser())


// routes 
import router from "./routes/user.routes.js";

// routes declaration

app.use("/users",router);   //"users" is the prefix

// the url will look like this : http://localhost:8000/users/login  or http://localhost:8000/users/register

export{app};