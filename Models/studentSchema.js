import mongoose from "mongoose";

const studentSchema= mongoose.Schema({
    student_name:String,
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', default: null },
    previousMentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }]
})
const Student=mongoose.model("Student",studentSchema)

export default Student