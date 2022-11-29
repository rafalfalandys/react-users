import UserSingle from "./UserSingle";
import styled from "styled-components";
import Card from "./Card.js";

const UsersListEl = styled.div`
  align-items: start;
  font-size: medium;

  /* margin-top: 3rem; */
`;

const UsersList = (props) => {
  const UsersList = () =>
    props.usersData.map((user) => (
      <UserSingle name={user.name} age={user.age} key={user.key} />
    ));

  return (
    <Card>
      <UsersListEl>{UsersList()}</UsersListEl>
    </Card>
  );
};

export default UsersList;

// key: new Date().toISOString(),
