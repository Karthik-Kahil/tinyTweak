/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";
import { loggout } from "../../utils/apiAuth";
import toast from "react-hot-toast";

const Styledh2 = styled.h2`
  font-size: 2rem;
  margin-right: 2rem;
  text-transform: capitalize;
  color: var(--color-white);
`;

const StyledIcon = styled(FaSignOutAlt)`
  font-size: 4.5rem;
  cursor: pointer;
  color: var(--color-white);
`;

function UserDetails({ children, setUserData }) {
  const logOutHandler = async () => {
    await loggout().then(() => toast.success("Logged out successfully"));
    localStorage.clear("userData");
    setUserData([]);
  };

  return (
    <>
      <Styledh2>{children}</Styledh2>
      <StyledIcon onClick={logOutHandler} title="logout" />
    </>
  );
}

export default UserDetails;
