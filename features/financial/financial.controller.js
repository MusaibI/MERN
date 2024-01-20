import FinancialRepository from "./financila.repository.js";

class FinancialController {

    constructor() {
        this.financialRepository = new FinancialRepository();
    }


    async postDetails(req, res) {
        try {
            const userId = req.userId;
            console.log(req.body);
            const sendBody = {
                userId: req.userId,
                income: req.body.income,
                savings: req.body.saving,
                expenses: req.body.expense,
            }
            const result = await this.financialRepository.postDetails(sendBody);
            res.status(200).send(result);

        } catch (err) {
            console.log(err);
            res.status(500).send({ success: false, error: err.message })
        }
    }
}

export default FinancialController;