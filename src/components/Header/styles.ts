import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: ${(props) => props.theme.colors.profile};

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;
  z-index: -1;

  &::after {
    content: '';
    display: inline-block;
    width: 14.75rem;
    height: 14.75rem;
    border-radius: 50%;
    background: #14589c;
    filter: blur(200px);

    position: absolute;
    top: -6rem;
    left: -6rem;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 9.6875rem;
    height: 9.6875rem;
    border-radius: 50%;
    background: #14589c;
    filter: blur(184px);

    position: absolute;
    top: -3.25rem;
    right: -0.625rem;
  }
`

export const Logo = styled.img`
  margin-top: -5.5rem;
`

interface CodeEffectProps {
  align?: 'left' | 'right'
}

export const CodeEffect = styled.img<CodeEffectProps>`
  position: absolute;

  ${(props) => {
    if (props.align && props.align === 'left') {
      return css`
        left: 0;
      `
    } else {
      return css`
        right: 0;
      `
    }
  }}

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: none;
  }
`
