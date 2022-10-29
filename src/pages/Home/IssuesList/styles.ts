import styled from 'styled-components'

export const IssuesListContainer = styled.ul`
  margin-top: 3rem;
  list-style: none;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  flex-grow: 1;

  li {
    width: 100%;
    max-width: calc(50% - 1rem);
    background: ${(props) => props.theme.colors.post};
    border-radius: 10px;
    padding: 2rem;
    overflow: hidden;

    @media ${(props) => props.theme.breakpoints.mobile} {
      max-width: 100%;
    }

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      strong {
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.title};
        max-width: 80%;
      }

      small {
        font-size: 0.875rem;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.span};
      }
    }

    p {
      font-size: 1rem;
      max-height: 112px;
      color: ${(props) => props.theme.colors.text};
      overflow: hidden;
      margin-top: 1.25rem;

      &::after {
        content: '...';
        display: inline-block;
      }
    }
  }
`
