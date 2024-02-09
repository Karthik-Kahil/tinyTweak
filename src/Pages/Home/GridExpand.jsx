import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";

const StyledDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  padding: 5rem;
  border-radius: 10px;
  z-index: 9999;
  border: 1px solid var(--color-white);
`;

const IoIosCloseCircleStyle = styled(IoIosCloseCircle)`
  font-size: 3rem;
  top: 10px;
  right: 10px;
  position: absolute;
`;

// eslint-disable-next-line react/prop-types
function GridExpand({ children, onClick }) {
  return (
    <StyledDiv>
      <div>
        <IoIosCloseCircleStyle onClick={onClick} />
      </div>
      <div>{children}</div>
    </StyledDiv>
  );
}

export default GridExpand;
