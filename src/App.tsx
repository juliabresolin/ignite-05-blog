import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { ProfileResume } from './components/ProfileResume'
import { UserProvider } from './contexts/UserContext'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <UserProvider>
        <Loader />
        <main>
          <ProfileResume />
        </main>
      </UserProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
