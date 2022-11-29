import styled from "styled-components";

const BtnEl = styled.button`
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
`;

const Button = (props) => {
  return <BtnEl>{props.btnName}</BtnEl>;
};

export default Button;
