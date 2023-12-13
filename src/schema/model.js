import {model} from "mongoose";

import webuserSchema from "./webuserSchema.js";
import nameSchema from "./nameSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";
import userSchema from "./userSchema.js";


export let Webuser = model("Webuser",webuserSchema);
export let Name = model("Name",nameSchema);
export let Product = model("Product",productSchema);
export let Review = model("Review",reviewSchema);
export let User =model("User",userSchema);



