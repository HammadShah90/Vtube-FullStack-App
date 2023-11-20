import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { Box, IconButton, Typography, Button, Stack } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

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
// const Button = styled.button`
//   border: none;
//   background-color: #ff000d;
//   padding: 15px 20px;
//   color: white;
//   border-radius: 15px;
//   cursor: pointer;
//   width: inherit;

//   &:hover {
//     background-color: #fa464f;
//   }

//   &.custom-toast {
//     background-color: ${({ theme }) => theme.bg};
//     color: ${({ theme }) => theme.text};
//   }
// `;

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
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const SignIn = ({ theme }) => {
  // console.log(theme);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordVisibilityHandler = () => {
    setShowPassword((show) => !show);
  };
  const confirmPasswordVisibilityHandler = () => {
    setShowConfirmPassword((show) => !show);
  };
  // let themeColor = theme === false ? lightTheme : darkTheme;

  const loginHandler = async (e) => {
    // console.log(e);
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      console.log(theme);
      toast.error("All fields are required", {
        position: "top-right",
        theme: theme ? "dark" : "light",
        autoClose: 2000,
      });
      return;
    } else if (password !== confirmPassword) {
      toast.error("Password do not match", {
        position: "top-right",
        theme: theme ? "dark" : "light",
        autoClose: 2000,
      });
      setMatchPassword(false);
      return;
    }
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      toast.success("Login Successful", {
        position: "top-right",
        theme: theme ? "dark" : "light",
        autoClose: 2000,
      });
      console.log(res.data);
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Welcome Back</Title>
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
          <IconButton
            sx={{ color: "red" }}
            aria-label="toggle password visibility"
            onClick={passwordVisibilityHandler}
            edge="end"
          >
            {showPassword ? (
              <VisibilityOffOutlinedIcon />
            ) : (
              <VisibilityOutlinedIcon />
            )}
          </IconButton>
        </InputBox>
        <InputBox>
          <PasswordOutlinedIcon />
          <Input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <IconButton
            sx={{ color: "red" }}
            aria-label="toggle password visibility"
            onClick={confirmPasswordVisibilityHandler}
            edge="end"
          >
            {showConfirmPassword ? (
              <VisibilityOffOutlinedIcon />
            ) : (
              <VisibilityOutlinedIcon />
            )}
          </IconButton>
        </InputBox>
        <Link
          to="/forgotpassword"
          style={{ textDecoration: "none", width: "100%", textAlign: "end" }}
        >
          <Text>Forgot Password?</Text>
        </Link>
        <Stack
          spacing={2}
          direction="row"
          padding="20px"
          width="100%"
        >
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#ff0000", width: "inherit" }}
            >
              Signup
            </Button>
          </Link>
          <Button
            variant="contained"
            onClick={loginHandler}
            style={{
              backgroundColor: "#ff0000",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            Login
          </Button>
        </Stack>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <Box
            sx={{
              height: "1px",
              backgroundColor: `${({ theme }) => theme.bg}`,
              width: "45%",
            }}
          >.</Box>
          <Typography
            variant="p"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              color: `${({ theme }) => theme.text}`,
            }}
          >
            or
          </Typography>
          <Box
            sx={{
              height: "1px",
              backgroundColor: `${({ theme }) => theme.text}`,
              width: "45%",
            }}
          >.</Box>
        </Box> */}
      </Wrapper>
    </Container>
  );
};

export default SignIn;
