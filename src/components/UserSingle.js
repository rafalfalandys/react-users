import styled from "styled-components";

////////////////////////////////////////
const UserBar = styled.div`
  display: flex;
  gap: 1em;

  h2 {
    font-size: medium;
    font-weight: 400;
  }
`;
////////////////////////////////////////

const UserSingle = (props) => {
  return (
    <UserBar>
      <h2>
        Rafał <span>(33 years)</span>
      </h2>
    </UserBar>
  );
};

export default UserSingle;
