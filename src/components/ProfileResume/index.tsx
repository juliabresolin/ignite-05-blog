import { useContext } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
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

        <span>details</span>
      </Details>

      <a href={user.html_url} target="_blank noreferrer noopenner">
        Github
        <FaExternalLinkAlt />
      </a>
    </ProfileResumeContainer>
  )
}
