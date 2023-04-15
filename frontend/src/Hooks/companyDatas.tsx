import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:2001/api";

export const companyData = () => {
  const [company, setCompany] = useState<[]>([]);
  const getAll = async () => {
    try {
      await axios.get(`${url}/getallcompany`).then((res) => {
        // console.log(res);
        return setCompany(res.data.date);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  return [company];
};
