import axios from "axios";

const url = "http://localhost:2622/api";

export const register = async (route: string, data: {}) => {
  try {
    await axios.post(`${url}/${route}`, data).then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async () => {
  try {
    await axios.get(`${url}/company`).then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};
