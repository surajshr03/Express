import { Router } from "express";
import { createStudent, deleteStudent, readAllStudents, readStudent, updateStudent } from "../controller/studentController.js";



let studentRouter = Router();

studentRouter.route("/")
.post(createStudent)
.get(readAllStudents)

studentRouter
.route('/:studentId')
.get(readStudent)
.patch(updateStudent)
.delete(deleteStudent);

export default studentRouter;