import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";

const HeroPage = () => {
  return (
    <HeroHolder>
      <Header />
      <Container>
        <Wrapper>
          <TextDiv>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Get Started For Free</button>
          </TextDiv>
          <ImageDiv>
            <img src="/images/illustration-mockups.svg" />
          </ImageDiv>
        </Wrapper>
      </Container>
    </HeroHolder>
  );
};

export default HeroPage;

const HeroHolder = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  background-image: url("/images/bg-hero-desktop.svg");
  background-color: lightblue;
  margin-bottom: 100px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const TextDiv = styled.div`
  width: 400px;
  font-family: "Poppins", sans-serif;

  p {
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  button {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 13px;
    padding: 12px 45px;
    background-color: hotpink;
    color: #fff;
    border-radius: 20px;
    outline: none;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  @media (max-width: 800px) {
    margin-bottom: 20px;
    button {
      font-size: 12px;
      padding: 8px 32px;
    }
  }
  @media (max-width: 400px) {
    text-align: center;
    h1 {
      font-size: 20px;
    }
  }
`;
const ImageDiv = styled.div`
  img {
    width: 600px;
  }

  @media (max-width: 800px) {
    margin-bottom: 20px;
    img {
      width: 400px;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 300px;
    }
  }
`;
