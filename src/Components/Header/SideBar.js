import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <span> Home</span>
      <span> Discover </span>
      <span>Community</span>
      <span>Services</span>
      <button>Try it Free</button>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: darkred;
  margin-top: -21px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  span {
    font-size: 22px;
    font-weight: 700;
    margin: 20px;
  }

  button {
    font-family: "Sen", sans-serif;
    font-weight: bold;
    font-size: 15px;
    padding: 12px 45px;
    background-color: #fff;
    border-radius: 20px;
    outline: none;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
