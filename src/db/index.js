import mongoose  from "mongoose";
import { DB_NAME } from "../constants";

const CONNECTDB= async()=>{
    try {
        const connectionINSTANCE= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST : ${connectionINSTANCE.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection Error",error);
        process.exit(1);
    }

} 

export default CONNECTDB;