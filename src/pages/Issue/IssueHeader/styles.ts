import styled from 'styled-components'

export const IssueHeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem 2rem 2.5rem;
  background: ${(props) => props.theme.colors.profile};
  border-radius: 0.625rem;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 1.25rem;
    color: ${(props) => props.theme.colors.title};
    line-height: 1.3;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.blue};
    border-bottom: 1px solid transparent;
    transition: border 0.2s;

    &:hover {
      border-color: ${(props) => props.theme.colors.blue};
    }

    svg {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`

export const IssueDetails = styled.ul`
  list-style: none;
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.colors.span};
    line-height: 1.6;

    svg {
      color: ${(props) => props.theme.colors.label};
    }
  }
`
