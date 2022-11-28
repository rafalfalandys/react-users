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
  height: calc(100vh - 2rem);
  margin: 1rem auto;
  border-radius: 1rem;
  padding: 5rem;
  box-shadow: 1px 3px 7px 0px grey;
`;

const INIT_USERS = [{ name: "Rafał", age: "33", key: "007" }];

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [users, setUsers] = useState(INIT_USERS);

  const toggleModalHandler = (e) => {
    setIsModalVisible(!isModalVisible);
  };

  const addUser = (data) => {
    setUsers(data);
    toggleModalHandler();
  };

  return (
    <MainContainer>
      <Form onAddUser={addUser} />
      <UsersList />
      <Overlay
        isVisible={isModalVisible}
        onVisibilityChange={toggleModalHandler}
      />
      <Modal
        isVisible={isModalVisible}
        onVisibilityChange={toggleModalHandler}
      />
    </MainContainer>
  );
}

export default App;
