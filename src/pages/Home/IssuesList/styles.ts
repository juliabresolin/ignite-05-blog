import styled from 'styled-components'

export const IssuesListContainer = styled.ul`
  margin-top: 3rem;
  list-style: none;

  /* display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  flex-grow: 1; */

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }

  li {
    width: 100%;
    max-height: 16.25rem;
    background: ${(props) => props.theme.colors.post};
    border-radius: 10px;
    padding: 2rem;
    overflow: hidden;
    border: 2px solid transparent;
    transition: border 0.2s;

    &:hover {
      border-color: ${(props) => props.theme.colors.label};
    }

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
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      small {
        font-size: 0.875rem;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.span};
        text-align: right;
      }
    }

    p {
      flex: 1;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.text};
      margin-top: 1.25rem;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }
`
