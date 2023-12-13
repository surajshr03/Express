import { Schema } from "mongoose";

let nameSchema = Schema(
  {
    name: {
      type: String,
      required: [true, `name is required.`],
    },
    age: {
      type: Number,
      required: [true, `age is required.`],
    },
  },
  {
    timestamps: true,
  }
);

export default nameSchema;
