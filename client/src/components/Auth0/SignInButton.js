import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { FiUserCheck } from "react-icons/fi";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}><FiUserCheck /></Button>;
};



const Button = styled.button`
  background: transparent;
  border: none;
  color: #ccc;
  font-size: 25px;
  font-weight:700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }

`

export default LoginButton;