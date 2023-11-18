import React, { useState } from "react";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";
import axios from "axios";

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
  width: 500px;
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
  width: inherit;

  &:hover {
    background-color: #fa464f;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  // justify-content: space-between;
  // align-items: center;
  width: 100%;
  margin-top: 20px;
  gap: 10px;
`;
const Text = styled.p`
  margin-top: 10px;
  align-self: flex-end;
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const passwordVisibilityHandler = () => {
    setShowPassword(!showPassword);
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const res = await axios.post("/api/v1/auth/login", {
          email,
          password,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      setMatchPassword(false);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Welcome Back to Vtube</Title>
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
        {!matchPassword && <p style={{color: "red", fontSize: 12}}>Passwords do not match</p>}
        <Text>Forgot Password?</Text>
        <ButtonBox>
          <Link to="/signup" style={{ textDecoration: "none", width: "100%" }}>
            <Button>Sign Up</Button>
          </Link>
          <Button onClick={loginHandler}>Login</Button>
        </ButtonBox>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
