import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { darkTheme, lightTheme } from "../utils/Theme";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AuthActions from "../redux/middleware/auth";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
`;

const InputBox = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  margin-bottom: 25px;
  margin-right: 20px;
  margin-left: 20px;
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

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.soft};
  width: 100%;
`;

const CustomTextField = styled(TextField)`
  label {
    color: ${({ theme }) => theme.textSoft};
  }
  & label.Mui-focused {
    color: ${({ theme }) => theme.text};
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.text};
    }
    & fieldset {
      border-color: ${({ theme }) => theme.textSoft};
    }
    & input {
      color: ${({ theme }) => theme.text};
    }
  }
`;
const CustomFormControl = styled(FormControl)`
  label {
    color: ${({ theme }) => theme.textSoft};
  }
  & label.Mui-focused {
    color: ${({ theme }) => theme.text};
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.text};
    }
    & fieldset {
      border-color: ${({ theme }) => theme.textSoft};
    }
    & input {
      color: ${({ theme }) => theme.text};
    }
  }
`;

const VerifyOtp = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const passwordVisibilityHandler = () => {
    setShowPassword((show) => !show);
  };

  const verifyOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const apiResponse = await AuthActions.VerifyOtp({
        email,
        otp,
      });
      console.log(apiResponse);
      if (!apiResponse.status) {
        toast.error(apiResponse.message, {
          position: "top-right",
          theme: theme ? "light" : "dark",
          autoClose: 2000,
        });
      } else {
        toast.success(apiResponse.message, {
          position: "top-right",
          theme: theme ? "light" : "dark",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/signin");
        }, 2500);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.message, {
        position: "top-right",
        theme: theme ? "light" : "dark",
        autoClose: 2000,
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            padding: "20px",
            letterSpacing: "2px",
            fontSize: "27px",
          }}
        >
          Email Verification
        </Typography>
        <Hr />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            padding: "20px",
            marginBottom: "20px",
            width: "350px",
          }}
        >
          Please enter your email address and OTP which is send to your this
          email.
        </Typography>
        <CustomTextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          autoComplete="off"
          sx={{ m: 1, width: "100%", paddingRight: "17px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomFormControl
          sx={{ m: 1, width: "100%", paddingRight: "17px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password" fontSize="2px">
            OTP
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setOtp(e.target.value)}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={passwordVisibilityHandler}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff style={{ color: "red" }} />
                  ) : (
                    <Visibility style={{ color: "red" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </CustomFormControl>
        <Hr />
        <Stack direction="row" justifyContent="flex-end" padding="20px">
          <Button
            variant="contained"
            style={{ color: "#ffffff", backgroundColor: "#ff0000" }}
            onClick={verifyOtpHandler}
          >
            Verify Email
          </Button>
        </Stack>
      </Wrapper>
    </Container>
  );
};

export default VerifyOtp;
