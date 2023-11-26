import styled from "styled-components";
import React from "react";

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
  border-radius: 15px;
  width: 500px;
  padding: 40px;
`;

const Text = styled.h1`
  margin-bottom: 10px;
  word-spacing: 3px;
  letter-spacing: 2px;
  text-align: center;
  font-size: 20px;
`;

export default function SendEmail() {
  return (
    <Container>
      <Wrapper>
        <Text>
          We've sent a link to reset your password to your Email address.
        </Text>
      </Wrapper>
    </Container>
  );
}
