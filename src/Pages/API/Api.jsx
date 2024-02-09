import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10rem 0;
  color: var(--color-white);
  text-align: center;
`;

function Api() {
  return (
    <StyledDiv>
      <h2>
        We apologize for any inconvenience.
        <br />
        Our API is currently under development.
      </h2>
    </StyledDiv>
  );
}

export default Api;
