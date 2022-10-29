import { formatDistanceToNowStrict } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'
import { useContext, useEffect, useState } from 'react'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { Issue, IssuesContext } from '../../contexts/IssuesContext'
import { IssueDetails, IssueHeaderContainer, LinksContainer } from './styles'

export function IssueDetail() {
  const [issue, setIssue] = useState<Issue>({} as Issue)

  const params = useParams()
  const { getIssue } = useContext(IssuesContext)

  async function loadIssue() {
    const issue = await getIssue(params.issueId ?? '')
    setIssue(issue)
  }

  useEffect(() => {
    loadIssue()
  }, [])

  return (
    <IssueHeaderContainer>
      <LinksContainer>
        <Link to="/">
          <FaChevronLeft size={12} />
          Voltar
        </Link>

        <Link to={issue.html_url} target="_blank noreferrer noopenner">
          Ver no Github
          <FaExternalLinkAlt size={12} />
        </Link>
      </LinksContainer>

      <h1>{issue.title}</h1>

      <IssueDetails>
        <li>
          <FaGithub size={18} />
          <span>{issue.user ? issue.user.login : ''}</span>
        </li>

        <li>
          <FaCalendarDay size={18} />
          <span>
            {issue.created_at
              ? formatDistanceToNowStrict(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })
              : ''}
          </span>
        </li>
        <li>
          <FaComment size={18} />
          <span>{`${issue.comments} comentários`}</span>
        </li>
      </IssueDetails>
    </IssueHeaderContainer>
  )
}
