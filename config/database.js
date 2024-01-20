import mongoose from "mongoose";

const connectToMongoDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017").then(
        (res) => {
            console.log("Connected to DB")
        },
        (err) => {
            console.log(err)
        }

    )
}

export default connectToMongoDB;