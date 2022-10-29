import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IssueDetails, IssueHeaderContainer, LinksContainer } from './styles'

export function IssueHeader() {
  return (
    <IssueHeaderContainer>
      <LinksContainer>
        <Link to="/">
          <FaChevronLeft size={12} />
          Voltar
        </Link>

        <Link to="/">
          Ver no Github
          <FaExternalLinkAlt size={12} />
        </Link>
      </LinksContainer>

      <h1>JavaScript data types and data structures</h1>

      <IssueDetails>
        <li>
          <FaGithub size={18} />
          <span>juliabresolin</span>
        </li>

        <li>
          <FaCalendarDay size={18} />
          <span>Há 1 dia</span>
        </li>
        <li>
          <FaComment size={18} />
          <span>5 comentários</span>
        </li>
      </IssueDetails>
    </IssueHeaderContainer>
  )
}
