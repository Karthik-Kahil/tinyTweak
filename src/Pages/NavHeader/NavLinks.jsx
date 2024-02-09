import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;

  & li {
    margin: 0 4rem;
    font-size: 2rem;
    color: var(--color-half-white);
  }

  .active {
    color: var(--color-white);
    opacity: 1;
  }

  @media only screen and (max-width: 830px) {
    display: none;
  }
`;

function NavLinks() {
  return (
    <StyledUl>
      <li>
        <NavLink to={"/"}>Web</NavLink>
      </li>
      <li>
        <NavLink to={"/api"}>API</NavLink>
      </li>
      <li>
        <NavLink to={"/document"}>Document</NavLink>
      </li>
    </StyledUl>
  );
}

export default NavLinks;
