import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;

  & img {
    max-width: 300px;
    margin: 5rem 0;
  }

  & h2 {
    font-size: 2rem;
    color: var(--color-white);
    text-align: center;
  }
`;

function PageNotFound() {
  return (
    <StyledDiv>
      <img src="./public/assets/page_not_found.webp" alt="" />
      <h2>Apologies, the page you are looking for cannot be found.</h2>
      <h2>
        However, feel assured that there are plenty of other resources available
        on our <Link to={"/"}>homepage</Link>.
      </h2>
    </StyledDiv>
  );
}

export default PageNotFound;
