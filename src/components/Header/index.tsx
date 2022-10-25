import { HeaderContainer, Logo } from './styles'

import leftEffect from '../../assets/header-effect-left.svg'
import rightEffect from '../../assets/header-effect-right.svg'
import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftEffect} alt="" />

      <Logo src={logoImage} alt="" />

      <img src={rightEffect} alt="" />
    </HeaderContainer>
  )
}
