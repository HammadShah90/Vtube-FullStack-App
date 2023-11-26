import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import companyLogo from "../assets/companyLogo.jpg";
import Comments from "../components/Comments";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { videoSuccess } from "../redux/Slices/videoSlice";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 4;
  width: 66%;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 5px;
`;

const VideoWrapper = styled.div``;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 16px;
  gap: 5px;
  padding: 0px 5px;
`;

const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #bdb4b4;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 20px;
  padding: 0px 5px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
  font-size: 16px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ebebeb;
  border-radius: 80px;
  padding: 8px 20px;
  gap: 12px;
`;

const Subscription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  padding: 8px 20px;
  border-radius: 80px;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
  border-right: 1px solid #bdb4b4;
`;

const DisLike = styled.div`
  display: flex;
  align-items: center;
`;

const Subscribers = styled.h5`
  font-weight: normal;
  margin-top: 4px;
`;

const Hr = styled.hr`
  margin: 15px 5px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const VideoFrame = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const CommentCounts = styled.h3`
  margin-top: 20px;
  margin-left: 10px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;
const Recommendation = styled.div`
  flex: 3;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.Auth);
  const { currentVideo } = useSelector((state) => state.Video);

  console.log(currentUser);
  console.log(currentVideo);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];

  console.log(path);

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const videoRes = await axios.get(`/v1/videos/find/${path}`);
        console.log(videoRes);
        const channelRes = await axios.get(
          `/v1/users/find/${videoRes?.data?.data?.userId}`
        );
        setChannel(channelRes.data);
        dispatch(videoSuccess(videoRes?.data?.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchChannel();
  }, [path, dispatch]);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo.videoUrl} controls />
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Wrapper>
            <ChannelImage src={companyLogo} />
            <ChannelName>
              Saylani Welfare International Trust
              <Subscribers>89.6K subscribers</Subscribers>
            </ChannelName>
            <Box
              style={{
                backgroundColor: "transparent",
                paddingLeft: 5,
                paddingBottom: 0,
              }}
            >
              <Subscription>Subscribe</Subscription>
            </Box>
          </Wrapper>
          <Wrapper>
            <Box>
              <Like>
                <ThumbUpOffAltIcon style={{ marginRight: 10 }} />
                37K
              </Like>
              <DisLike>
                <ThumbDownOffAltIcon />
              </DisLike>
            </Box>
            <Box>
              <SendOutlinedIcon />
              Share
            </Box>
            <Box style={{ padding: "0px 12px" }}>
              <MoreHorizOutlinedIcon />
            </Box>
          </Wrapper>
        </Details>
        <Hr />
        <CommentCounts>
          <span>548 Comments</span>
        </CommentCounts>
        <Comments />
      </Content>
      {/* <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation> */}
    </Container>
  );
};

export default Video;
