import { styled } from "styled-components";
import React from "react";
import logo from "../assets/Saylani-Welfare.jpg";
import companyLogo from "../assets/companyLogo.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 280px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 6px;
`;

const Image = styled.img`
  width: 100%;
  height: 210px;
  border-radius: 15px;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #bdb4b4;
`;

const Text = styled.div``;
const Title = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`;

const Views = styled.h5`
  color: ${({ theme }) => theme.textSoft};
`;

const SeenTime = styled.h5`
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Card = () => {
  return (
    <Link to='/video/test' style={{textDecoration: "none"}}>
      <Container>
        <Image src={logo} />
        <Details>
          <ChannelImage src={companyLogo} />
          <Text>
            <Title>Saylani Welfare International Trust</Title>
            <ChannelName>Saylani Welfare</ChannelName>
            <Wrapper>
              <Views>1.2M Views ·</Views>
              <SeenTime>3 hours ago</SeenTime>
            </Wrapper>
          </Text>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
