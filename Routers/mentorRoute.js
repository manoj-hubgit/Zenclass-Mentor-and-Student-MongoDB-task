import express from "express"
import { assignStudent, createMentor, getStudentsForMentor } from "../Controller/mentorController.js";
const router=express.Router();

router.post('/creatementor',createMentor)
router.post('/assignstudent',assignStudent)
router.get('/studentsformentor/:id',getStudentsForMentor)


export default router