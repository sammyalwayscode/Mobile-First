import { useState } from "react";
import styled from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { GiCancel } from "react-icons/gi";
import SideBar from "./SideBar";

const Header = () => {
  const [barToggle, setBarToggle] = useState(false);
  console.log(barToggle);
  const barChange = () => {
    setBarToggle(!barToggle);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <img src="/images/logo.svg" alt="" />
          </Logo>

          <Navigation>
            <span> Home</span>
            <span> Discover </span>
            <span>Community</span>
            <span>Services</span>
            <button>Try it Free</button>
          </Navigation>

          <SideIcon>
            {barToggle ? (
              <GiCancel fontSize="35px" onClick={barChange} />
            ) : (
              <GoThreeBars fontSize="35px" onClick={barChange} />
            )}
          </SideIcon>
        </Wrapper>
      </Container>
      {barToggle ? <SideBar /> : null}
    </>
  );
};

export default Header;

const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  img {
    width: 150px;
  }
`;
const Navigation = styled.div`
  width: 550px;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
  span {
    font-weight: 600;
    transition: all 350ms;

    :hover {
      color: #747474;
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  button {
    font-family: "Sen", sans-serif;
    font-weight: bold;
    font-size: 13px;
    padding: 8px 35px;
    background-color: #fff;
    border-radius: 20px;
    outline: none;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const SideIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
