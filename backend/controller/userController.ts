import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
  try {
      const { email, password, confirmPassword } = req.body;
      
      

  } catch (error) {
    console.log("An Error Occured In registerUser", error);
  }
};
