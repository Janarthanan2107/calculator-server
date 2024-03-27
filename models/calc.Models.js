import mongoose from "mongoose"

const calcSchema = new mongoose.Schema(
    {
        calc: {
            type: String,
            trim: true,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const CALC = mongoose.model("calc", calcSchema)

export default CALC;