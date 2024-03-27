import express from "express"
import { addCalc, getCalc } from "../controller/calc.Controller.js";
const router = express.Router();

// add calculation --> http://localhost:5000/api/v1/calc/add
router.get("/", getCalc);
router.post("/add", addCalc);


export default router;