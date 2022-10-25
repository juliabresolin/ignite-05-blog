import { Header } from '../../components/Header'
import { Loader } from '../../components/Loader'
import { ProfileResume } from '../../components/ProfileResume'
import { UserProvider } from '../../contexts/UserContext'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <UserProvider>
        <Loader />
        <main>
          <ProfileResume />
        </main>
      </UserProvider>
    </HomeContainer>
  )
}
