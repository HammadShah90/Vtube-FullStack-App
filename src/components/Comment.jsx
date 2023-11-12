import React from "react";
import styled from "styled-components";
import dummyLogo from "../assets/dummy-logo.png";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #bdb4b4;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.h4`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.h5`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.p`
  font-size: 14px;
  text-align: justify;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
//   background-color: grey;
  margin-top: 10px;
  border-radius: 80px;
  gap: 12px;
  width: 30%;
  font-size: 13px
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

const Comment = () => {
  return (
    <Container>
      <Avatar src={dummyLogo} />
      <Details>
        <Name>
          @Hammad Shah <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
          commodi ipsum sapiente molestias, mollitia dolor ipsa minus asperiores
          dolorum ea ab minima, sunt temporibus. Vitae dolor placeat veritatis
          in consectetur!
        </Text>
        <Box>
          <Like>
            <ThumbUpOffAltIcon style={{ marginRight: 10, fontSize: 20 }} />
            37K
          </Like>
          <DisLike>
            <ThumbDownOffAltIcon style={{fontSize: 20}}/>
          </DisLike>
          <Text style={{marginLeft: 10, fontSize: 13, fontWeight: "bold"}}>
            Reply
          </Text>
        </Box>
      </Details>
    </Container>
  );
};

export default Comment;
