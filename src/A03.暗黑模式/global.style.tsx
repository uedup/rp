import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle<any>`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  :root{
    color-scheme: ${({ theme }) => {
      console.log(theme.name)
    return theme.name || 'normal'
  }
  };
    --color-head: ${({ theme }) => {
    return theme.color.head || 'inherit'
  }
  };
  }
  h1,h2,h3{
    color:var(--color-head)
  }
`;
export default GlobalStyle;