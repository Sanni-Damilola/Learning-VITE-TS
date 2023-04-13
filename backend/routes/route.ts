import { Router } from "express";
import { registerCompany } from "../controller/companyController";

const router = Router();

router.route("/createcompany").post(registerCompany);

export default router;
