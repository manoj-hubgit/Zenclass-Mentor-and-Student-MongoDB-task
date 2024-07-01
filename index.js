import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./Database/config.js"
import studentRouter from "./Routers/studentRoute.js"
import mentorRouter from './Routers/mentorRoute.js'
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
connectDB();

const port = process.env.PORT || 4000;

app.use('/api',studentRouter)
app.use('/api',mentorRouter)

app.get('/',(req,res)=>{
    res.status(200).send("Hello world")
})

app.listen(port,()=>{
    console.log("app is running successfully")
})



