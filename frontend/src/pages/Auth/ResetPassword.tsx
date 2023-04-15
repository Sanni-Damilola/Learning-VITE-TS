import styled from "styled-components";
import Card from "../../components/Card";

const ResetPassword = () => {
  return (
    <div>
      <Main>
        <Card
          reg={true}
          tex={false}
          textTitle="llll"
          message="lliii"
          remake="ppol"
          buttonTitle="Reset Password"
          title="Reset Password"
          inputTitle="Email"
          inputTitle1="Password"
          inputTitle2="Confirm"
          sign={false}
          request={false}
          onClick={() => {
            console.log(" I am");
          }}
          text="Ohh, i think i now remember"
          route="Sign in"
          path="/signin"
        />
      </Main>
    </div>
  );
};

export default ResetPassword;

const Main = styled.div`
  display: flex;
  height: calc(100vh - 270px);
  width: 100%;
  justify-content: center;
  align-items: center;
`;
