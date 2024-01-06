import { Schema } from "mongoose";

let studentSchema = Schema(
  {
    name: { type: String, required: [true, "name is required."] },
    roll: { type: Number, required: [false, "price is required."] },
    age: { type: Number, required: [true, "quantity is required."] },
    studentId: { type: String, required: [false, "studentId is required."] },
    isMarried: {
      type: Boolean,
      required: [true, "isMarried required"],
    },
  },
  {
    timestamps: true,
  }
);

export default studentSchema;
