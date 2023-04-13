import mongoose from "mongoose";

interface Iuser {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  token: string;
  OTP: string;
  rcNumber: string;
  staffs: {}[];
  verified: boolean;
}

interface companyModel extends Iuser, mongoose.Document {}

const companySchema = new mongoose.Schema<Iuser>({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
  token: {
    type: String,
  },
  rcNumber: {
    type: String,
  },
  OTP: {
    type: String,
  },
  staffs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "staff(EJS)",
    },
  ],
  verified: {
    type: Boolean,
  },
});

export default mongoose.model<companyModel>("company(EJS)", companySchema);
