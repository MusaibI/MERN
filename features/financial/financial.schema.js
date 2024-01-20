import mongoose from "mongoose";

export const financialSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    income: Number,
    savings: Number,
    expenses: Number,
})