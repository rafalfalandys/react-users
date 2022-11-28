import UserSingle from "./UserSingle";
import styled from "styled-components";

const UsersListEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: medium;
  gap: 1rem;
  background-color: aliceblue;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: inset 1px 2px 5px grey;

  margin-top: 3rem;
`;

const UsersList = (props) => {
  return (
    <UsersListEl>
      <UserSingle />
    </UsersListEl>
  );
};

export default UsersList;
