import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";

import light from "./themes/light";
import dark from "./themes/dark";

import { Container, Content, LeftContent, RightContent } from "./styles";

function App() {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header onChangeTheme={onChangeTheme} />
        <Content>
          <LeftContent>
            
          </LeftContent>
          <RightContent>
            
          </RightContent>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
