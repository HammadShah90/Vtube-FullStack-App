import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import VideosAction from "../redux/middleware/videos";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10px;
`;

const Home = ({ type }) => {
  const [videos, setvideos] = useState([]);
  // console.log(videos[0].userId);

  useEffect(() => {
    const fetchVideos = async () => {
      const apiResponse = await VideosAction.getAllVideos(type);
      // console.log(apiResponse.data);
      setvideos(apiResponse?.data);
    };
    fetchVideos();
  }, [type]);
  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
