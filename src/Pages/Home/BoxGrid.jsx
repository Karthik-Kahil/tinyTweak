import styled from "styled-components";

/* eslint-disable react/prop-types */

const BoxGridStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.$bgColor};
  padding: 3rem;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }

  & > h2 {
    font-size: 2rem !important;
  }

  & > p {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 5rem;
  }
`;

function BoxGrid({ children, bgColor, hoverColor }) {
  return (
    <BoxGridStyled $bgColor={bgColor} $hoverColor={hoverColor}>
      {children}
    </BoxGridStyled>
  );
}

export default BoxGrid;
