import React from "react";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 2px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
  border-radius: 15px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  width: 100%;/.
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  padding: 15px;
  width: inherit;
  font-size: 14px;
`;
const Button = styled.button`
  border: none;
  background-color: #ff000d;
  padding: 15px 20px;
  color: white;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #fa464f;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
const Text = styled.p`
  margin-top: 10px;
  align-self: flex-start;
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <InputBox>
          <PersonOutlineOutlinedIcon />
          <Input type="text" placeholder="Username" />
        </InputBox>
        <InputBox>
          <PasswordOutlinedIcon />
          <Input type="password" placeholder="Password" />
          <VisibilityOutlinedIcon />
        </InputBox>
        <InputBox>
          <PasswordOutlinedIcon />
          <Input type="password" placeholder="Confirm Password" />
          <VisibilityOutlinedIcon />
        </InputBox>
        <Text>Forgot Password?</Text>
        <ButtonBox>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button>Sign Up</Button>
          </Link>
          <Button>Login</Button>
        </ButtonBox>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
