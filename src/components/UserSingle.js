import styled from "styled-components";

////////////////////////////////////////
const UserBar = styled.div`
  h2 {
    font-size: medium;
    font-weight: 400;
    margin: 0;
    line-height: 3rem;
  }
`;
////////////////////////////////////////

const UserSingle = (props) => {
  return (
    <UserBar>
      <h2>
        {props.name} <span>({props.age} years)</span>
      </h2>
    </UserBar>
  );
};

export default UserSingle;
