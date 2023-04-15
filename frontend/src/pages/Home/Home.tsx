import React, { useEffect, useState } from "react";
import { useCompany } from "../../Hook/useCompany";

const Home = () => {
  const [company] = useCompany();

  console.log(company);

  return (
    <div>
      {company.map((props: any) => (
        <div key={props._id}>{props?.email}</div>
      ))}
    </div>
  );
};

export default Home;
