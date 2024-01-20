import mongoose from "mongoose";

export const userScheme = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
})
