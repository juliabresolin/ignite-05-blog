import { FaExternalLinkAlt } from 'react-icons/fa'
import { Details, ProfileResumeContainer } from './styles'

export function ProfileResume() {
  return (
    <ProfileResumeContainer>
      <img src="https://github.com/juliabresolin.png" alt="" />

      <Details>
        <strong>Julia Bresolin</strong>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <span>details</span>
      </Details>

      <a href="">
        Github
        <FaExternalLinkAlt />
      </a>
    </ProfileResumeContainer>
  )
}
