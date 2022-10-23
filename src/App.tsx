import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>hello world</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
