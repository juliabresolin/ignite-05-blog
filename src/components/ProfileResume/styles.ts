import styled from 'styled-components'

export const ProfileResumeContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme.colors.profile};
  border-radius: 0.625rem;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  position: relative;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  a {
    position: absolute;
    right: 2rem;
    top: 2.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.blue};
    line-height: 1.6;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.title};
  }

  p {
    line-height: 1.6;
    color: ${(props) => props.theme.colors.text};
    margin-top: 0.5rem;
  }
`
