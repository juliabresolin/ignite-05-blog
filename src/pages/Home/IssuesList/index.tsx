import { useContext } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'
import { IssuesContext } from '../../../contexts/IssuesContext'
import { IssuesListContainer } from './styles'
import { Link } from 'react-router-dom'

export function IssuesList() {
  const { issues } = useContext(IssuesContext)

  return (
    <IssuesListContainer>
      {issues.map((issue) => {
        return (
          <li key={issue.id}>
            <Link to={String(issue.id)}>
              <header>
                <strong>{issue.title}</strong>
                <small>
                  {formatDistanceToNowStrict(new Date(issue.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </small>
              </header>

              <p>{issue.body}</p>
            </Link>
          </li>
        )
      })}
    </IssuesListContainer>
  )
}
