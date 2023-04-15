import styled from "styled-components";
import { companyData } from "../../Hooks/companyDatas";

const Home = () => {
  const [company] = companyData();

  console.log("hello", company);

  return (
    <div>
      <CompanyDetails>
        {company?.map((e: any) => (
          <Data key={e._id}>
            <b>Email</b>👇<i>{e.email}</i> <br />
            <b>Name</b> 👇<i>{e.name}</i> <br />
            <b>RCNUMBER</b> 👇<i>{e.rcNumber}</i>
          </Data>
        ))}
      </CompanyDetails>
    </div>
  );
};

export default Home;

const CompanyDetails = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lavender;
  flex-wrap: wrap;
`;

const Data = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 30px;
  flex-direction: column;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-bottom: 30px;
  background-color: purple;

  b {
    cursor: pointer;
  }

  i {
    margin-left: 6px;
  }
`;
