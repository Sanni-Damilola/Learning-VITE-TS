import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/authSystem";

export const dataBase = async () => {
  try {
    if (mongoose.connection.host === "127.0.0.1") {
      console.log("You are connected to local host");
    } else {
      console.log("You Are connected to Clould Host");
    }
  } catch (error) {
    console.log("An error Occured in database", error);
  }
};
