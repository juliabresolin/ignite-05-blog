import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'
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
              <small>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </small>
            </header>

            <p>{issue.body.substring(0, 200)}</p>
          </li>
        )
      })}
    </IssuesListContainer>
  )
}
