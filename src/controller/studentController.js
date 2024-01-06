// import { Student } from "../schema/model.js"; 

import { Student } from "../schema/model.js";

//create student data
export let createStudent = async (req, res) => {
  let studentData = req.body;
  try {
    let result = await Student.create(studentData);
    res.status(200).json({
      success: true,
      message: "Student data created successfully.",
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//read all data
export let readAllStudents = async (req, res) => {

  let result = await Student.find({});

  try {
    res.status(200).json({
      success: true,
      message: "Student data read(retrieve) successfully",
      result: result,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

//read by student id
export let readStudent = async (req, res) => {
  let studentId = req.params.studentId;

  try {
    let result = await Student.findById(studentId);
    res.status(200).json({
      success: true,
      message: "Student read successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//update
export let updateStudent = async (req, res) => {
  let studentId = req.params.studentId;
  let updateData = req.body;
  try {
    let result = await Student.findByIdAndUpdate(studentId, updateData);
    res.status(201).json({
      success: true,
      message: "Student updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//delete
export let deleteStudent = async (req, res) => {
  let studentId = req.params.studentId;
  try {
    let result = await Student.findByIdAndDelete(studentId);
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
