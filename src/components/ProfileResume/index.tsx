import { useContext } from 'react'
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from 'react-icons/fa'
import { UserContext } from '../../contexts/UserContext'
import { Details, ProfileResumeContainer } from './styles'

export function ProfileResume() {
  const { user } = useContext(UserContext)

  return (
    <ProfileResumeContainer>
      <img src={user.avatar_url} alt="" />

      <Details>
        <strong>{user.name}</strong>
        <p>{user.bio}</p>

        <ul>
          <li>
            <FaGithub size={18} />
            {user.login}
          </li>
          <li>
            <FaBuilding size={18} />
            {user.company}
          </li>
          <li>
            <FaUserFriends size={18} />
            {user.followers} seguidores
          </li>
        </ul>
      </Details>

      <a href={user.html_url} target="_blank noreferrer noopenner">
        Github
        <FaExternalLinkAlt />
      </a>
    </ProfileResumeContainer>
  )
}
