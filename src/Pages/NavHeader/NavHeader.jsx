import styled from "styled-components";
import Logo from "../../UI/Logo";
import NavLinks from "./NavLinks";
import Button from "../../UI/Button";
import LoginPage from "../LoginPage/LoginPage";
import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import { useSelector } from "react-redux";

const StyledDiv = styled.header`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
  border-bottom: 1px solid #1d1d1f;
  padding: 1rem 10%;
  position: fixed;
  z-index: 999;
  width: 100%;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    position: relative;
  }
`;

function NavHeader() {
  const { isLogin } = useSelector((sel) => sel.droppingData);
  const [isOpen, setIsOpen] = useState(false || isLogin);
  const [userData, setUserData] = useState([]);

  const clickHandler = () => {
    setIsOpen((el) => !el);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);

  return (
    <StyledDiv>
      <div>
        <Logo />
        <NavLinks />
        {userData.length !== 0 && (
          <UserDetails setUserData={setUserData}>{userData.name}</UserDetails>
        )}
        {userData.length === 0 && <Button onClick={clickHandler}>Login</Button>}
        {isOpen && <LoginPage onClick={clickHandler} />}
      </div>
    </StyledDiv>
  );
}

export default NavHeader;
