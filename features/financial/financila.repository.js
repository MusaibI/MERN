import mongoose from "mongoose";
import { financialSchema } from "./financial.schema.js";

const FinancialModel = mongoose.model("Financial", financialSchema);


class FinancialRepository {

    async postDetails(body) {
        const financialModel = new FinancialModel(body);
        await financialModel.save();
        return body;
    }
}

export default FinancialRepository;