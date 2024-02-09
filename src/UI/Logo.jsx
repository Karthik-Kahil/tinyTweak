import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdRocket } from "react-icons/io";

const LogoStyled = styled.div`
  & a {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & img {
    width: 70px;
    max-width: 70px;
  }

  & h2 {
    font-size: 3rem;
    color: #ecf9f1;
  }
`;

const Icon = styled(IoMdRocket)`
  font-size: 3rem;
  line-height: normal;
  position: relative;
  margin: -2px;
  color: #7e66f7;
`;

function Logo() {
  return (
    <LogoStyled>
      <Link to={"/"}>
        <h2>
          T<Icon />
          nyTweak
        </h2>
      </Link>
    </LogoStyled>
  );
}

export default Logo;
