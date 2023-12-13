import { Product } from "../schema/model.js"; 

//create product data
export let createProduct = async (req, res) => {
  let productData = req.body;
  try {
    let result = await Product.create(productData);
    res.json({
      success: true,
      message: "Product data created successfully.",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};

//read all data
export let readAllProducts = async (req, res) => {

  let result = await Product.find({});

  try {
    res.json({
      success: true,
      message: "Product data read(retrieve) successfully",
      result: result,
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
};

//read by product id
export let readProduct = async (req, res) => {
  let productId = req.params.productId;

  try {
    let result = await Product.findById(productId);
    res.json({
      success: true,
      message: "Product read successfully",
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
export let updateProduct = async (req, res) => {
  let productId = req.params.productId;
  let updateData = req.body;
  try {
    let result = await Product.findByIdAndUpdate(productId, updateData);
    res.json({
      success: true,
      message: "Product updated successfully",
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
export let deleteProduct = async (req, res) => {
  let productId = req.params.productId;
  try {
    let result = await Product.findByIdAndDelete(productId);
    res.json({
      success: true,
      message: "Product deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
