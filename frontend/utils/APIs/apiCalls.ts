import axios from "axios";

export const registerCompany = async (url: string, data: {}) => {
  try {
    await axios.post(url, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
