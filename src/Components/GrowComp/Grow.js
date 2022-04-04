import React from "react";
import styled from "styled-components";

const Grow = () => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <h3>Grow Together</h3>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.{" "}
          </p>
        </TextDiv>
        <ImageDiv>
          <img src="/images/illustration-grow-together.svg" alt="" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default Grow;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: cyan; */

  @media (max-width: 500px) {
    /* background-color: gold; */
    justify-content: center;
    /* flex-direction: column-reverse; */
  }
`;
const TextDiv = styled.div`
  width: 430px;
  /* background-color: red; */
  p {
    font-size: 16px;
    color: #aaa;
    line-height: 1.5;
  }

  @media (max-width: 500px) {
    width: 310px;
  }
`;
const ImageDiv = styled.div`
  margin: 20px 0;
  img {
    width: 400px;
  }

  @media (max-width: 500px) {
    img {
      width: 270px;
    }
  }
`;
