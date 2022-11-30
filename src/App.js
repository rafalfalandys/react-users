import React from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";
import styled from "styled-components";
import Overlay from "./components/Overlay";
import Modal from "./components/Modal";
import { useState } from "react";

const MainContainer = styled.div`
  background: lightblue;
  max-width: 70rem;
  /* height: calc(100vh - 2rem); */
  margin: 1rem auto;
  border-radius: 1rem;
  padding: 5rem 2rem;
  box-shadow: 1px 3px 7px 0px grey;
`;

const INIT_USERS = [
  { name: "Rafał", age: "33", key: "2022-11-28T10:29:17.886Z" },
];

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [users, setUsers] = useState(INIT_USERS);
  const [errorMsg, setErrorMsg] = useState(
    "Something went wrong. Check name and age input fields"
  );

  const addUser = (data) => {
    if (data.name.trim() === "" && data.age.trim() === "") {
      return renderError("Name and Age input fields are empty!");
    }
    if (data.age.trim() === "") return renderError("Also write your age");
    if (+data.age.trim() < 0) return renderError("Age must be larger than 0");
    if (data.name.trim() === "") return renderError("Also tell us your name");
    setUsers([data, ...users]);
  };

  const toggleModalVisibility = () => setIsModalVisible(!isModalVisible);

  const renderError = (errorMsg) => {
    toggleModalVisibility();
    setErrorMsg(errorMsg);
  };

  return (
    <MainContainer>
      <Form onAddUser={addUser} onError={renderError} />
      <UsersList usersData={users} />
      <Overlay isVisible={isModalVisible} onClick={toggleModalVisibility} />
      <Modal
        onError={{ isVisible: isModalVisible, errorMsg: errorMsg }}
        onBtnClick={toggleModalVisibility}
      />
    </MainContainer>
  );
}

export default App;
