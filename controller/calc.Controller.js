import CALC from "../models/calc.Models.js";

export const addCalc = async (req, res) => {
    try {
        const { calc } = req.body;
        // Create a new calculation to database
        const newCalc = new CALC({ calc: calc });
        const savedCalc = await newCalc.save();

        res.status(201).json(savedCalc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getCalc = async (req, res) => {
    try {
        // Retrieve calculations from the database
        const calculations = await CALC.find();

        res.status(200).json(calculations);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}