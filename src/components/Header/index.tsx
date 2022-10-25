import { CodeEffect, HeaderContainer, Logo } from './styles'

import leftEffect from '../../assets/header-effect-left.svg'
import rightEffect from '../../assets/header-effect-right.svg'
import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <CodeEffect src={leftEffect} alt="" align="left" />

      <Logo src={logoImage} alt="" />

      <CodeEffect src={rightEffect} alt="" align="right" />
    </HeaderContainer>
  )
}
