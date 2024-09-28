import React from "react";
import styled from "styled-components";
import RegisterandLogin from "./authComponent/RegisterandLogin";
import { FaHome } from "react-icons/fa";
const Container = styled.div`
  position: relative;
  /* width: 100%; */
  display: flex;
  height: 30px;
  background-color: #ffff8f;
  color: black;
  padding: 10px;
  /* font-weight: 600; */
  /* justify-content: space-between; */
  gap: 50px;
  font-weight: 500;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: start;
  align-items: center;
  gap: 40px;
  color: #10162d;
`;

const Tabs = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: #10162d;
`;

const Button = styled.button`
  position: fixed;
  top: 2%;
  right: 3%;
  background-color: #a5f0a8;
  border: 1px solid #67bb6b;
  border-radius: 5px;
  padding: 5px 12px;
  cursor: pointer;
  font-weight: 400;
  &:hover {
    background-color: #a5f0a8; /* Change background on hover */
    color: black; /* Change text color on hover */
  }

  &:active {
    background-color: #a5f0a8; /* Darker background on click */
    transform: scale(0.95); /* Slightly shrink the button */
  }
`;

const Appbar = ({ login, setLogin }) => {
  const handleClick = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };
  return (
    <>
      <Container>
        <ContentContainer style={{ fontWeight: 700, gap: "5px" }}>
          <FaHome />
          Find Your Home
        </ContentContainer>
        <ContentContainer>
          <Tabs>HOME</Tabs>
          <Tabs>About</Tabs>
          <Tabs>Contact</Tabs>
          <Tabs>Agents</Tabs>
        </ContentContainer>
        <Button onClick={handleClick}>{login ? "Register" : "Login"}</Button>
      </Container>
    </>
  );
};

export default Appbar;
