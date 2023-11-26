import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { darkTheme, lightTheme } from "../utils/Theme";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AuthActions from "../redux/middleware/auth";
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
  //   align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 15px;
  width: 500px;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // border-bottom: 1px solid ${({ theme }) => theme.soft};

  width: 100%;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  padding: 15px;
  width: inherit;
  font-size: 14px;
  border-radius: 5px;
  margin-bottom: 25px;
  margin-right: 20px;
  margin-left: 20px;
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.soft};
  width: 100%;
`;

const ResetPassword = ({ theme }) => {
  const { userId, token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  // // const [matchPassword, setMatchPassword] = useState(true);
  // // const [showPassword, setShowPassword] = useState(false);
  // // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // // const [showPasswordError, setShowPasswordError] = useState(false);
  // // const [showConfirmPasswordError, setShowConfirmPasswordError] =
  // //   useState(false);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const verifyToken = async () => {
  //     try {
  //       const apiResponse = await axios.get(
  //         `http://localhost:8000/api/v1/auth/resetpassword/${userId}/${token}`
  //       );
  //       console.log(apiResponse);
  //     } catch (error) {
  //       setError("Invalid or Expire Token");
  //     }
  //   };
  //   verifyToken();
  // }, [userId, token]);

  // const changePasswordHandler = async (e) => {
  //   e.preventDefault();
  //   if (password.length < 8) {
  //     toast.error("Password must be at least 8 characters", {
  //       position: "top-right",
  //       theme: theme ? "light" : "dark",
  //       autoClose: 2000,
  //     });
  //     return;
  //   } else if (password !== confirmPassword) {
  //     toast.error("Passwords do not match", {
  //       position: "top-right",
  //       theme: theme ? "light" : "dark",
  //       autoClose: 2000,
  //     });
  //     return;
  //   }
  //   dispatch(loginPending());
  //   try {
  //     const apiResponse = await AuthActions.ResetPassword({
  //       password,
  //       userId,
  //       token,
  //     });
  //     console.log(apiResponse);
  //     if (apiResponse.status === 200) {
  //       toast.success(apiResponse.message, {
  //         position: "top-right",
  //         theme: theme ? "light" : "dark",
  //         autoClose: 2000,
  //       });
  //       navigate("/signin");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.message, {
  //       position: "top-right",
  //       theme: theme ? "light" : "dark",
  //       autoClose: 2000,
  //     });
  //   }
  // };
  return (
    <Container>
      <Wrapper>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            padding: "20px",
          }}
        >
          Change Password
        </Typography>
        <Hr />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          Please enter your new password to reset your password
        </Typography>
        <InputBox>
          {/* <PersonOutlineOutlinedIcon /> */}
          <Input
            type="password"
            placeholder="New password"
            onChange={() => {
              setPassword(e.target.value);
            }}
          />
        </InputBox>
        <InputBox>
          {/* <PersonOutlineOutlinedIcon /> */}
          <Input
            type="password"
            placeholder="Confirm password"
            onChange={() => {
              setConfirmPassword(e.target.value);
            }}
          />
        </InputBox>
        <Hr />
        <Stack
          direction="row"
          justifyContent="flex-end"
          padding="20px"
        >
          <Button
            variant="contained"
            style={{ color: "#ffffff", backgroundColor: "#ff0000" }}
            // onClick={changePasswordHandler}
          >
            Reset Password
          </Button>
        </Stack>
      </Wrapper>
    </Container>
  );
};

export default ResetPassword;
