import styled from "styled-components";

const OverlayEl = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  z-index: 1;
  transition: all 0.4s;

  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
`;

const Overlay = (props) => {
  return <OverlayEl className={props.isVisible || "hidden"} />;
};

export default Overlay;
