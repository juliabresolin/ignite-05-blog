import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 1.6;
      color: ${(props) => props.theme.colors.subtitle};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme.colors.span};
    }
  }
`

export const FormContainer = styled.form`
  flex: 1;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme.colors.input};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 6px;

    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.text};
    text-overflow: ellipsis;

    &::placeholder {
      color: ${(props) => props.theme.colors.label};
    }
  }
`
