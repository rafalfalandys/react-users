import styled from "styled-components";
import { useState } from "react";

const FormUser = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: medium;
  gap: 1rem;
  background-color: aliceblue;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: inset 1px 2px 5px grey;

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
  }
`;

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const setFormData = () => {
    setEnteredName();
  };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e.target.values);
    // props.onAddUser();
  };
  return (
    <FormUser onSubmit={clickHandler} onChange={setFormData}>
      <label>Username</label>
      <input type="text" value={enteredName} />
      <label>Age (Years)</label>
      <input type="text" value={enteredAge} />
      <button type="submit">Add User</button>
    </FormUser>
  );
};

export default Form;
