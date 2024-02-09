import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 1100px;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  background-color: var(--color-primary);
  color: var(--color-white);
  margin: 5rem 0;

  & ul {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    font-size: 2rem;
  }

  & ul li {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  & img {
    max-width: 100px;
  }

  & h2 {
    font-size: 2rem;
  }
`;

const Signature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin-top: 2rem;

  & div {
    display: flex;
    gap: 2rem;
    font-size: 3rem;
    justify-content: center;
    margin-top: 2rem;
  }

  & svg {
    cursor: pointer;
    text-align: center;
  }
`;

function Footer() {
  return (
    <StyledDiv>
      <Container>
        <ul>
          <li>
            <Link to={"/api"}>API</Link>
          </li>
          <li>
            <Link to={"/document"}>Documentation</Link>
          </li>
          <li>
            <Link to={"https://ko-fi.com/karthikkahil"} target="_blank">
              <img
                src="https://assets-global.website-files.com/5c14e387dab576fe667689cf/64f1a9ddd0246590df69e9f9_ko-fi_logo_03-p-500.png"
                alt=""
                title="donate with ko-fi - Karthik Kahil"
              />
            </Link>
          </li>
        </ul>
      </Container>
      <Signature>
        <h2>Built by Karthik Kahil</h2>
        <div>
          <FaLinkedin />
          <FaGithub />
        </div>
      </Signature>
    </StyledDiv>
  );
}

export default Footer;
