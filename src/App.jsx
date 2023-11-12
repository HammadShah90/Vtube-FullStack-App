import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import "./App.css";


const Container = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex: 3.5;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 20px 25px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <BrowserRouter>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path='/signin' element={<SignIn />} />
                  <Route path='/signup' element={<SignUp />} />
                  <Route path="/video/:id" element={<Video />} />
                </Routes>
              </Wrapper>
            </Main>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
