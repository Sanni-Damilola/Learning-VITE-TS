import { Router } from "express";
import { deletAllModel, registerCompany } from "../controller/companyController";

const router = Router();

router.route("/createcompany").post(registerCompany);
router.route("/deleteallmodel").delete(deletAllModel);

export default router;
