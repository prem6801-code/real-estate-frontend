import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  /* display: flex;*/
  /* height: 100%;
  width: 100%;  */
  height: 60vh;
`;
const LoginContainer = styled.div`
  position: fixed;
  top: 30%;
  bottom: 50%;
  left: 20%;
  right: 30%;
  height: 250px;
  width: 60%;
  /* align-items: center;
  justify-content: center; */
  /* border: 1px solid red; */
`;

const AuthHeader = styled.div`
  /* width: 100%; */
  font-size: 20px;
  color: #ffc000;
  /* background-color: blue; */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  padding: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const Label = styled.label`
  font-size: 14px;
`;
const Input = styled.input`
  padding: 10px 10px;
  width: 200px;
  &:focus {
    border-color: #fffdd0; /* Change border color */
    background-color: #fffdd0; /* Change background color */
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 5px 10px;
  width: 100px;
  background-color: #fffaa0;
  border: 1px solid #e0d08f;
  border-radius: 5px;
  color: #37db7b;
  transition: all 0.2s ease; /* Smooth transition for effects */
  &:hover {
    background-color: #fffaa0; /* Change background on hover */
    color: #37db7b; /* Change text color on hover */
  }

  &:active {
    background-color: #d0c080; /* Darker background on click */
    transform: scale(0.95); /* Slightly shrink the button */
  }
`;

const RegisterandLogin = ({ login }) => {
  // Login/Register States
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Register States

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <Container>
      <LoginContainer>
        <AuthHeader>Welcome Back</AuthHeader>
        <AuthBody>
          {!login && (
            <InputContainer>
              {/* <Label>Username</Label> */}
              <Input
                placeholder="Full NAme"
                type="text"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              ></Input>
            </InputContainer>
          )}
          <InputContainer>
            {/* <Label>Username</Label> */}
            <Input
              placeholder="username"
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></Input>
          </InputContainer>
          {!login && (
            <InputContainer>
              {/* <Label>Username</Label> */}
              <Input
                placeholder="Mobile No"
                type="text"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              ></Input>
            </InputContainer>
          )}
          <InputContainer>
            {/* <Label>Passowrd</Label> */}
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Button
              onClick={(e) => {
                console.log("first", e);
              }}
            >
              {login ? "Login" : "SignUp"}
            </Button>
          </InputContainer>
        </AuthBody>
      </LoginContainer>
    </Container>
  );
};

export default RegisterandLogin;
