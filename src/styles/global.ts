import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  } 

  :focus {
    outline: ${(props) => props.theme.colors.blue}; 
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem ${(props) => props.theme.fonts.default}
  }

  button, a, a:-webkit-any-link  {
    cursor: pointer;
    text-decoration: none;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      transition: all .2s;
    }
  }
`
