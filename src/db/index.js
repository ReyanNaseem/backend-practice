import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async ()=>{
    try {
            const response = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
            console.log(`\n MongoDB connected !! DB HOST: ${response.connection.host}`);
            
        }
    catch (error) {
            console.log("MONGODB connection ERR",error);
            process.exit(1);
        }
}

export default connectDB;