import styled from "styled-components";

const CardEl = styled.div`
  background-color: aliceblue;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  box-shadow: inset 1px 2px 5px grey;
  margin: 1rem;
`;

const Card = (props) => {
  return <CardEl>{props.children}</CardEl>;
};

export default Card;
