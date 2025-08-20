import mongoose, { Schema } from "mongoose";

const DataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true},
})

export const DataModel = mongoose.model("Data",DataSchema,"example_01")