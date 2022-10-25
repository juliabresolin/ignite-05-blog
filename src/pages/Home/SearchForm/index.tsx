import { FormContainer, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </header>

      <FormContainer action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>
    </SearchFormContainer>
  )
}
