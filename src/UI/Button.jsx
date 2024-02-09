/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.$colorbg ? `var(${props.$colorbg})` : `#a8c0ff`};
  color: ${(props) =>
    props.$colordrop ? `var(${props.$colordrop})` : "#3f2b96"};
  font-weight: bold;
  outline: 0;
  border: 0;
  padding: ${(props) => (props.$pad ? props.$pad : "1rem 2rem")};
  border-radius: 5px;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};

  -webkit-box-shadow: 0px 5px 0px 0px #3f2b96;
  -moz-box-shadow: 0px 5px 0px 0px #3f2b96;
  box-shadow: 0px 5px 0px 0px #3f2b96;

  &:hover {
    transform: translate(0, 1px);
  }

  & svg {
    line-height: normal;
    vertical-align: text-top;
  }
`;

function Button({ children, colorbg, colordrop, pad, onClick, fullWidth }) {
  return (
    <StyledButton
      onClick={onClick}
      $colorbg={colorbg}
      $colordrop={colordrop}
      $pad={pad}
      $fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
