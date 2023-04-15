import React from "react";
import Card from "../../components/Card";

const Confirm = () => {
  return (
    <div>
      <Card
        tex={true}
        textTitle="Confirm"
        message="Congratulations..."
        remake="Please go check your mail"
      />
    </div>
  );
};

export default Confirm;
