import { useContext } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { IssuesContext } from '../../../contexts/IssuesContext'
import { FormContainer, SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { quantity, getIssues } = useContext(IssuesContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssue(data: SearchFormInputs) {
    await getIssues(data.query)
  }

  return (
    <SearchFormContainer>
      <header>
        <strong>Publicações</strong>
        <span>{`${quantity} Publicações`}</span>
      </header>

      <FormContainer onSubmit={handleSubmit(handleSearchIssue)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          disabled={isSubmitting}
          {...register('query')}
        />
      </FormContainer>
    </SearchFormContainer>
  )
}
