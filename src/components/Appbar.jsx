import React from "react";
import styled from "styled-components";
import RegisterandLogin from "./authComponent/RegisterandLogin";
import { FaHome } from "react-icons/fa";
const Container = styled.div`
  /* width: 100%; */
  height: 30px;
  background-color: #FFFF8F;
  color: black;
  padding: 10px;
  font-weight: 600;
`;

const Appbar = () => {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "start",
            alignItems: "center",
            // justifyContent: "center",
            gap: "10px",
          }}
        >
          Find Your Home <FaHome />
        </div>
      </Container>
    </>
  );
};

export default Appbar;
