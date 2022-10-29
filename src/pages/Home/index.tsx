import { Header } from '../../components/Header'
import { Loader } from '../../components/Loader'
import { ProfileResume } from '../../components/ProfileResume'
import { IssuesProvider } from '../../contexts/IssuesContext'
import { UserProvider } from '../../contexts/UserContext'
import { IssuesList } from './IssuesList'
import { SearchForm } from './SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <UserProvider>
        <IssuesProvider>
          <Loader />
          <main>
            <ProfileResume />
            <SearchForm />
            <IssuesList />
          </main>
        </IssuesProvider>
      </UserProvider>
    </HomeContainer>
  )
}
