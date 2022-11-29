import styled from "styled-components";

const ModalEl = styled.div`
  background-color: aliceblue;
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70vw;
  max-width: 70rem;
  /* height: 50vh; */
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;

  h1 {
    height: 9rem;
    background-color: lightcoral;
    margin-top: 0;
    padding: 3rem 3rem;
    font-size: 3rem;
  }

  p {
    padding: 3rem 3rem;
    font-size: medium;
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

  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
`;

const Modal = (props) => {
  return (
    <ModalEl className={`${props.onError.isVisible || "hidden"}`}>
      <h1>Invalid Input</h1>
      <p>{props.onError.errorMsg}</p>
      <button onClick={props.onBtnClick}>Okay</button>
    </ModalEl>
  );
};

export default Modal;
