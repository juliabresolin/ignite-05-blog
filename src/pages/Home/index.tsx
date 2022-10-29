import { Loader } from '../../components/Loader'
import { ProfileResume } from '../../components/ProfileResume'
import { IssuesList } from './IssuesList'
import { SearchForm } from './SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Loader />
      <main>
        <ProfileResume />
        <SearchForm />
        <IssuesList />
      </main>
    </HomeContainer>
  )
}
