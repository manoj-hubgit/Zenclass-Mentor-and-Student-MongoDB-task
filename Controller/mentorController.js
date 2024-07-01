import Mentor from '../Models/mentorSchema.js';
import Student from '../Models/studentSchema.js';

export const createMentor = async (req, res) => {
  const { mentor_name } = req.body;
  try {
    const newMentor = new Mentor({ mentor_name });
    await newMentor.save();
    res.status(201).json(newMentor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const assignStudent = async (req, res) => {
  const { student_id, mentor_id } = req.body;
  try {
    const student = await Student.findById(student_id);
    student.mentor = mentor_id;
    await student.save();

    const mentor = await Mentor.findById(mentor_id);
    mentor.students.push(student_id);
    await mentor.save();

    res.status(200).json({ message: 'Student assigned to mentor successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudentsForMentor = async (req, res) => {
  const { id } = req.params;
  try {
    const mentor = await Mentor.findById(id).populate('students');
    res.status(200).json(mentor.students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
