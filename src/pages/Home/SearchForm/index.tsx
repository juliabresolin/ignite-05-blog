import { useContext } from 'react'
import { IssuesContext } from '../../../contexts/IssuesContext'
import { FormContainer, SearchFormContainer } from './styles'

export function SearchForm() {
  const { quantity } = useContext(IssuesContext)

  return (
    <SearchFormContainer>
      <header>
        <strong>Publicações</strong>
        <span>{`${quantity} Publicações`}</span>
      </header>

      <FormContainer action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>
    </SearchFormContainer>
  )
}
