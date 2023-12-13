import { Name } from "../schema/model.js";

//create name data
export let createName = async (req, res) => {
  let nameData = req.body;
  try {
    let result = await Name.create(nameData);
    res.json({
      success: true,
      message: "Name data created successfully.",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};

//read all data
export let readAllNames = async (req, res) => {
  let query = req.query;
  let brake = query.brake;//route?brake=2&page=3
  let page = query.page;

  let result = await Name.find({}).limit(brake).skip((page-1)*2);

  try {
    res.json({
      success: true,
      message: "Name data read(retrieve) successfully",
      result: result,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};

//read by name id
export let readName = async (req, res) => {
  let nameId = req.params.nameId;

  try {
    let result = await Name.findById(nameId);
    res.json({
      success: true,
      message: "Name read successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//update
export let updateName = async (req, res) => {
  let nameId = req.params.nameId;
  let updateData = req.body;
  try {
    let result = await Name.findByIdAndUpdate(nameId, updateData);
    res.json({
      success: true,
      message: "Name updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//delete
export let deleteName = async (req, res) => {
  let nameId = req.params.nameId;
  try {
    let result = await Name.findByIdAndDelete(nameId);
    res.json({
      success: true,
      message: "Name deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
