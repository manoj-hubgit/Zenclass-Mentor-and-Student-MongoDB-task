import Student from '../Models/studentSchema.js';
import Mentor from '../Models/mentorSchema.js';

export const createStudent = async (req, res) => {
  const { student_name } = req.body;
  try {
    const newStudent = new Student({ student_name });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const changeMentor = async (req, res) => {
  const { student_id, new_mentor_id } = req.body;
  try {
    const student = await Student.findById(student_id);
    if (student.mentor) {
      student.previousMentors.push(student.mentor);
    }
    student.mentor = new_mentor_id;
    await student.save();
    res.status(200).json({ message: 'Mentor changed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPreviousMentors = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id).populate('previousMentors');
    res.status(200).json(student.previousMentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
