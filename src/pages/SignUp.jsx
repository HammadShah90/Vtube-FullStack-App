import React, { useState } from "react";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
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
  width: 100%;
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

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const Button = styled.button`
  border: none;
  background-color: #ff000d;
  padding: 15px 20px;
  color: white;
  border-radius: 15px;
  cursor: pointer;
  width: inherit;

  &:hover {
    background-color: #fa464f;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  gap: 10px;
`;
const More = styled.div``;

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <Container>
      <Wrapper>
        <Title>Sign up</Title>
        <Name>
          <InputBox>
            <PersonOutlineOutlinedIcon />
            <Input
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <PersonOutlineOutlinedIcon />
            <Input
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputBox>
        </Name>
        <InputBox>
          <PersonOutlineOutlinedIcon />
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <PersonOutlineOutlinedIcon />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <PasswordOutlinedIcon />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <VisibilityOutlinedIcon style={{ cursor: "pointer" }} />
        </InputBox>
        <InputBox>
          <PasswordOutlinedIcon />
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <VisibilityOutlinedIcon style={{ cursor: "pointer" }} />
        </InputBox>
        <ButtonBox>
          <Button>Sign Up</Button>
          <Link to="/signin" style={{ textDecoration: "none", width: "100%" }}>
            <Button>Login</Button>
          </Link>
        </ButtonBox>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
