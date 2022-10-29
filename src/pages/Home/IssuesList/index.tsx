import { useContext } from 'react'
import { IssuesContext } from '../../../contexts/IssuesContext'
import { IssuesListContainer } from './styles'

export function IssuesList() {
  const { issues } = useContext(IssuesContext)

  return (
    <IssuesListContainer>
      {issues.map((issue) => {
        return (
          <li key={issue.id}>
            <header>
              <strong>{issue.title}</strong>
              <small>{issue.created_at}</small>
            </header>

            <p>{issue.body.substring(0, 200)}</p>
          </li>
        )
      })}
    </IssuesListContainer>
  )
}
