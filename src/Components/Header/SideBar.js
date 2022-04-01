import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <h1> This is the sidebar</h1>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: darkred;
`;
