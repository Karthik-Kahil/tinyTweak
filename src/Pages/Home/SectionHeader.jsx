/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h4 {
    font-size: 2rem;
    line-height: normal;
    color: #dae5f3;
  }

  h2 {
    font-size: 4rem;
    line-height: normal;
    color: #dae5f3;
  }

  p {
    color: #dae5f3;
  }
`;

function SectionHeader({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default SectionHeader;
