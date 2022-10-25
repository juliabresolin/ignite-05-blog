import styled from 'styled-components'

export const LoaderContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;

  background: ${(props) => props.theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
`
