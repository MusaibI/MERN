import express from "express";
import FinancialController from "./financial.controller.js";

const financialRouter = express.Router();
const financialController = new FinancialController();


financialRouter.post('/', (req, res) => financialController.postDetails(req, res));

export default financialRouter;