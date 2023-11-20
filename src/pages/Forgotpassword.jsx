import React, { useState } from "react";
import styled from "styled-components";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css"
import { darkTheme, lightTheme } from "../utils/Theme";

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
  border-bottom: 1px solid ${({ theme }) => theme.soft};
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
  margin: 20px;
`;

const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.soft};
  width: 100%;
`;

const Forgotpassword = () => {

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
          Find Your Account
        </Typography>
        <Hr />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            padding: "20px",
          }}
        >
          Please enter your email address to search for your account.
        </Typography>
        <InputBox>
          {/* <PersonOutlineOutlinedIcon /> */}
          <Input
            type="email"
            placeholder="Email Address"
          />
        </InputBox>
        <Hr />
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-end"
          padding="20px"
        >
          <Button
            variant="outlined"
            style={{
              color: "#ff0000",
              backgroundColor: "transparent",
              border: "1px solid #ff0000",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{ color: "#ffffff", backgroundColor: "#ff0000" }}
            onClick={forgorPasswordHandler}
          >
            Search
          </Button>
        </Stack>
      </Wrapper>
    </Container>
  );
};

export default Forgotpassword;
