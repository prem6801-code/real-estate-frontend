import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import GoogleLogo from "/public/image.png";
import BaseImage from "/public/Untitled.png";
const Container = styled.div`
  position: relative;
  /* display: flex;*/
  /* height: 100%;
  width: 100%;  */
  height: 60vh;
`;
const LoginContainer = styled.div`
  position: fixed;
  top: 23%;
  /* bottom: 50%; */
  /* left: 5%; */
  /* right: 30%; */
  height: 250px;
  width: 45%;
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
  border-radius: 5px;
  border:1px solid #ccc;
  &:focus {
    border-color: #fffdd0; /* Change border color */
    background-color: #fffdd0; /* Change background color */
    border-radius: 5px;
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
  cursor: pointer;

  font-weight: 400;
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

  useEffect(() => {
    console.log("inside Use Effect");
    setUserName("");
    setPassword("");
    setFullName("");
    setMobile("");
  }, [login]);

  const userLogin = async () => {
    if (userName && password) {
      const res = await axios.post("/login", {
        email: userName,
        password: password,
      });
    } else {
    }
  };

  const userRegister = async () => {
    const res = await axios.post("/register", {
      fullName: fullName,
      email: userName,
      password: password,
      mobile: mobile,
    });
  };

  const handleClick = () => {
    if (login) {
      userLogin();
    } else {
      userRegister();
    }
  };

  // Login With Google Functions

  const responseGoogle = (response) => {
    console.log(response);
    // Send the token to your backend for verification
    const { tokenId } = response;
    // Example: fetch('/api/auth/google', { method: 'POST', body: JSON.stringify({ tokenId }) })
  };

  const onFailure = (response) => {
    console.error("Login failed:", response);
  };
  return (
    <>
      <Container>
        <LoginContainer>
          <AuthHeader>
            {login ? "Welcome Back ..!" : "Please Register"}
          </AuthHeader>
          <AuthBody>
            {!login && (
              <InputContainer>
                {/* <Label>Username</Label> */}
                <Input
                  placeholder="Full Name"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                ></Input>
              </InputContainer>
            )}
            <InputContainer>
              {/* <Label>Username</Label> */}
              <Input
                placeholder="Email"
                type="email"
                value={userName}
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
                  value={mobile}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Input>
            </InputContainer>
            <InputContainer>
              <Button onClick={handleClick}>
                {login ? "Login" : "SignUp"}
              </Button>
              {/* <GoogleLoginComponent/> */}
            </InputContainer>
            <InputContainer style={{ height: "20px" }}>
              <GoogleLogin
                clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick} // Use the onClick function from GoogleLogin
                    disabled={renderProps.disabled} // Disable button if needed
                    style={{
                      backgroundColor: "#5bcdfa",
                      height: "20px",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      padding: "15px",
                      borderRadius: "5px",
                      fontWeight: 500,
                    }}
                  >
                    <img
                      src={GoogleLogo}
                      alt="Google Icon"
                      style={{
                        // marginRight: "8px",
                        height: "15px",
                        width: "15px",
                      }}
                    />
                    Continue with Google
                  </button>
                )}
              />
            </InputContainer>
          </AuthBody>
        </LoginContainer>
      </Container>
      <div style={{ position: "relative" }}>
        <img
          src={BaseImage}
          alt="Google Icon"
          style={{
            // marginRight: "8px",
            position: "fixed",
            top: "20%",
            right: "5%",
            height: "auto",
            maxWidth: "700px",
            borderRadius: "30px",
            // clipPath: "circle(70% at 50% 50%)"
            boxShadow:"10px black"
          }}
        />
      </div>
    </>
  );
};

export default RegisterandLogin;
