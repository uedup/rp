import React, { useCallback, useEffect, useState } from "react";
import styled, { ThemeProvider, css } from 'styled-components';
import Content from "./Content";
import GlobalStyle from "./global.style";

const Wrapper = styled.div`
  text-align: center;
`;
const ModeBtn = styled.button`
  font-size: 36px;
  margin: 10px;
`;
const Button = styled.button`
  background-color: ${props => props.theme.color.bgPrimary};
  color: ${props => props.theme.color.txtPrimary};
  font-weight: bold;
  padding:.6em 2em;
  border-radius: .5em;
  margin: 3.6em 0 .6em;
  ${props => props.theme.name === 'dark' && css`
    border: 6px solid props.theme.color.txtPrimary;
  `};
`;

enum ColorSchemeMode { light, dark }
type themeType = {
    name: string,
    color: {
      head: string,
      bgPrimary: string,
      txtPrimary: string,
  }
}
const COLOR_THEME:themeType[] = [
  {
    name: 'light',
    color: {
      head: 'black',
      bgPrimary: '#e15f5f',
      txtPrimary: '#98f1f3',
    }
  },
  {
    name: 'dark',
    color: {
      head: 'white',
      bgPrimary: '#29be3a',
      txtPrimary: '#8c2fb4',
    }
  },
]

function App() {
  const [mode, setMode] = useState<ColorSchemeMode>(ColorSchemeMode.dark)
  console.log(mode)
  const sysModeChangeHandler = useCallback((e: any) => {
    if (e.matches) {
      setMode(ColorSchemeMode.dark)
    } else {
      setMode(ColorSchemeMode.light)

    }
  }, [])

  useEffect(() => {
    const isDarkMode = !!window.matchMedia('(prefers-color-scheme:dark').matches;
    setMode(isDarkMode ? ColorSchemeMode.dark : ColorSchemeMode.light)
    window.matchMedia('(prefers-color-scheme:dark').addListener(sysModeChangeHandler);
    return () => {
      window.matchMedia('(prefers-color-scheme:dark').removeListener(sysModeChangeHandler);
    }
  }, [sysModeChangeHandler])

  console.log(COLOR_THEME[mode])
  return (
    <ThemeProvider theme={COLOR_THEME[mode]}>
      <GlobalStyle />
      <Wrapper>
        <section>
          <ModeBtn
            disabled={mode === ColorSchemeMode.dark}
            onClick={() => { setMode(ColorSchemeMode.dark) }}
          >🌞</ModeBtn>
          <ModeBtn
            disabled={mode === ColorSchemeMode.light}
            onClick={() => { setMode(ColorSchemeMode.light) }}
          >🌛</ModeBtn>
        </section>
        <Button>OK</Button>
        <Content></Content>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App