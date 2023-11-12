import React from "react";
import styled from "styled-components";
import companyLogo from "../assets/companyLogo.jpg";
import Comment from "./Comment";

const Container = styled.div`
  margin-top: 30px;
  padding: 0px 5px;
`;

const NewComment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #bdb4b4;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  padding: 5px;
  width: 100%;
  font-size: 14px;

  &::placeholder {
    color: ${({theme}) => theme.textSoft};
  }
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={companyLogo} />
        <Input type="text" placeholder="Add a comments here" />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
