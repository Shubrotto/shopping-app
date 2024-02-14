import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  transform: translateX(0vw);
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const handleClick = (direction) => {};
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
