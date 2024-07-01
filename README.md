Mentor and Student Assignment System
This project is an API-based backend system for assigning students to mentors using Node.js, Express, and MongoDB.
The system allows creating mentors and students, assigning students to mentors, changing mentors for students, retrieving students for a mentor,
and showing previously assigned mentors for a student.

API Endpoints

Create Mentor
POST /api/creatementor
Body: mentor_name (string)

Create Student
POST /api/createstudent
Body: student_name (string)

Assign Student to Mentor
POST /api/assignstudent
Body: student_id (string), mentor_id (string)

Change Mentor for Student
POST /api/changementor
Body: student_id (string), new_mentor_id (string)

Get Students for a Mentor
GET /api/studentsformentor/:id

Get Previous Mentors for a Student
GET /api/previousmentors/:id

Usage
Use the provided Postman collection to test the API endpoints:
[Postman Documentation](https://documenter.getpostman.com/view/35034228/2sA3dviXHc)
