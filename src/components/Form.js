import styled from "styled-components";
import { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const FormUser = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: medium;
  gap: 1rem;

  label {
    margin-left: 1rem;
  }

  input {
    height: 3rem;
    border-radius: 10rem;
    border: none;
    box-shadow: 0px 2px 2px grey;
    width: 100%;
    padding: 0 1rem;
  }

  button {
    margin: 2rem 0;
    padding: 2rem;
    width: auto;
    border-radius: 10rem;
    border: none;
    box-shadow: 0px 2px 2px grey;
    background-color: lightcoral;
    font-size: medium;
    align-self: center;

    :active {
      transform: scale(0.95);
    }
  }
`;

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (e) => setEnteredName(e.target.value);
  const ageChangeHandler = (e) => setEnteredAge(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      name: enteredName,
      age: enteredAge,
      key: new Date().toISOString(),
    };
    props.onAddUser(userData);
    if (enteredName.trim() === "" || enteredAge.trim() === "") return;
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <Card>
      <FormUser onSubmit={submitHandler}>
        <label>Username</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
        <label>Age (Years)</label>
        <input
          type="number"
          // min="0"
          step="1"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </FormUser>
    </Card>
  );
};

export default Form;
