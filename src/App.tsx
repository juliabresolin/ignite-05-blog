import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { ProfileResume } from './components/ProfileResume'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <main>
        <ProfileResume />
      </main>

      <GlobalStyle />
    </ThemeProvider>
  )
}
