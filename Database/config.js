import mongoose from "mongoose";
import dotenv, { config } from "dotenv";

dotenv.config()

const mongoDB_url= process.env.MongoDB_url

export const connectDB=async(req,res)=>{
    try {
        const connection=await mongoose.connect(mongoDB_url)
    } catch (error) {
        res.status(500).json({message:"MongoDB server Error"})
    }
}