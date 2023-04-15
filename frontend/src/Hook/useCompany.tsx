import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:2622/api";

export const useCompany = () => {
  const [company, setCompany] = useState<[]>([]);
  const getAll = async () => {
    try {
      await axios.get(`${url}/company`).then((res) => {
        return setCompany(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll();
    console.log(company);
  }, []);

  return [company] as const;
};
