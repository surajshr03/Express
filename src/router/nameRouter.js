import { Router } from "express";
import { createName, deleteName, readAllNames, readName, updateName } from "../controller/nameController.js";

let nameRouter = Router();

nameRouter.route("/")
.post(createName)
.get(readAllNames)

nameRouter
.route('/:nameId')
.get(readName)
.patch(updateName)
.delete(deleteName)

export default nameRouter;