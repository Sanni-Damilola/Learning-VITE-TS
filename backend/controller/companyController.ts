import { Request, Response } from "express";
import companyModel from "../model/companyModel";
import crypto from "crypto";
import { verifyCompanyAccount } from "../email/email";

export const registerCompany = async (req: Request, res: Response) => {
  try {
    const { email, password, confirmPassword, name } = req.body;

    const token = crypto.randomBytes(64).toString("hex");
    const OTP = crypto.randomBytes(2).toString("hex");
    const rcNumber = crypto.randomBytes(4).toString("hex");

    const createCompany = await companyModel.create({
      email,
      password,
      confirmPassword,
      name,
      token,
      OTP,
      rcNumber,
    });
    verifyCompanyAccount(createCompany)
      .then((res) => {
        console.log("Data", res);
      })
      .catch((err) => {
        console.log("Could'nt sent Email", err);
      });

    if (!email || !password || !confirmPassword || !name) {
      return res.status(400).json({
        message: "Missing (email, password, confirmPassword) in request",
      });
    }
  } catch (error) {
    console.log("An Error Occured In registerUser", error);
  }
};

export const getAllCompany = async (req: Request, res: Response) => {
  try {
    const getAllCompany = await companyModel.find();
    return res.status(200).json({
      message: "Succeffully gotten all data",
      date: getAllCompany,
    });
  } catch (error) {
    console.log("An Error Occured In registerUser", error);
  }
};
export const deletAllModel = async (req: Request, res: Response) => {
  try {
    const deleteAllModel = await companyModel.deleteMany();
    return res.status(200).json({
      message: "Succeffully deleted all Data" + deletAllModel.length,
      date: deleteAllModel,
    });
  } catch (error) {
    console.log("An Error Occured In deletAllModel", error);
  }
};
