import React from "react";
import styled from "styled-components";
import companyLogo from "../assets/companyLogo.jpg";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

const VideoWrapper = styled.div`

`;

const Details = styled.div`
  // display: flex;
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
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
  margin-left: 10px;
`;

const Subscribers = styled.h5`
  font-weight: normal;
  margin-top: 4px;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="391"
            src="https://www.youtube.com/embed/vmnAjHNp1hc"
            title="Bhulne ki bimari ka wazifa | Hazrat Maulana Bashir Farooq Qadri"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "25px" }}
          ></iframe>
        </VideoWrapper>
        <Details>
          <Title>
            Bhulne ki bimari ka wazifa | Hazrat Maulana Bashir Farooq Qadri
          </Title>
          <Wrapper>
            <ChannelImage src={companyLogo} />
            <ChannelName>
              Saylani Welfare
              <Subscribers>
                89.6K subscribers
              </Subscribers>
            </ChannelName>
          </Wrapper>
        </Details>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

export default Video;
