import mongoose from "mongoose";
import { userScheme } from "./user.schema.js";


const UserModel = mongoose.model("User", userScheme)
class UserRepository {

    async signUp(userBody) {
        const userModel = new UserModel(userBody);
        await userModel.save();
        return (userBody)
    }

    async emailCheck(email) {
        const result = UserModel.findOne({ email: email });
        return result;
    }
}

export default UserRepository;