import mongoose from "mongoose";

interface Iuser {
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
  staffId: string;
  verified: boolean;
  OTP: string;
  rcNumber: string;
  company: {}[];
}

interface userModel extends Iuser, mongoose.Document {}

const userSchema = new mongoose.Schema<Iuser>({
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
  staffId: {
    type: String,
  },
  OTP: {
    type: String,
  },
  rcNumber: {
    type: String,
  },
  company: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company(EJS)",
    },
  ],
  verified: {
    type: Boolean,
  },
});

export default mongoose.model<userModel>("staff(EJS)", userSchema);
