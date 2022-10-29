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

  button, a {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      transition: all .2s;
    }
  }

  main {
    width: 100%;
    max-width: 54rem;
    padding: 0 1rem 14rem 1rem;
    margin: 0 auto;
  }
`
