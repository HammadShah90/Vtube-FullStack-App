import { styled } from "styled-components";
import React from "react";
import logo from "../assets/Saylani-Welfare.jpg";
import companyLogo from "../assets/companyLogo.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 335px;
  margin-bottom: ${({ type }) => (type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${({ type }) => type === "sm" && "flex"};
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 6px;
  font-size: ${({type}) => (type === "sm" ? "14px" : "16px")}
`;

const Image = styled.img`
  width: 100%;
  height: ${({ type }) => (type === "sm" ? "100px" : "201px")};
  border-radius: 15px;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${({ type }) => (type === "sm" ? "3px" : "16px")};
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #bdb4b4;
  display: ${({ type }) => type === "sm" && "none"};
`;

const Text = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: ${({ type }) => (type === "sm" ? "12px" : "0px")};
`;
const Title = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
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

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image src={logo} type={type} />
        <Details type={type}>
          <ChannelImage type={type} src={companyLogo} />
          <Text type={type}>
            <Title>Saylani Welfare International Trust</Title>
            <ChannelName>Saylani Welfare</ChannelName>
            <Wrapper type={type}>
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
