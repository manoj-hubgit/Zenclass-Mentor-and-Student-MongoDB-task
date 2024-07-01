import express from "express"
import { changeMentor, createStudent, getPreviousMentors } from "../Controller/studentController.js";
const router=express.Router();

router.post('/createstudent',createStudent)
router.post('/changementor',changeMentor)
router.get('/previousmentors/:id',getPreviousMentors)

export default router

