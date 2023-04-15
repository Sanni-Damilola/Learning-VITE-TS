import { Router } from "express";
import { deletAllModel, getAllCompany, registerCompany } from "../controller/companyController";

const router = Router();

router.route("/createcompany").post(registerCompany);
router.route("/deleteallmodel").delete(deletAllModel);
router.route("/getallcompany").get(getAllCompany);

export default router;
