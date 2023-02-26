import styled from "@emotion/styled";
import themes from "../constants/themes";

const SubHeader = () => {
  return (
    <SubHeaderEl>
      <h1>Crypto Update</h1>
      <p>Get All The Info Regarding Your Favorite Crypto Currency</p>
    </SubHeaderEl>
  );
};

export default SubHeader;

const SubHeaderEl = styled.div`
  text-align: center;
  padding: 10px;
  margin: auto;
  border-radius: 14px;
  background-color: ${themes.colors.lightGrey};
  border: 2px solid ${themes.colors.lightGrey};
`;
