import dotenv from "dotenv"
import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

dotenv.config({path: './env'})

// import express from "express";
import connectDB from "./db/index.js";

connectDB();

/*
const app = express();
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERRR", error);
            throw error;
        });
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERR",error);
        process.exit(1);
    }
})()
*/