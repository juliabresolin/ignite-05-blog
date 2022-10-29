import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { IssuesProvider } from './contexts/IssuesContext'
import { UserProvider } from './contexts/UserContext'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <IssuesProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </IssuesProvider>
      </UserProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
