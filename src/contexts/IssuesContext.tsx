import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Issue {
  id: number
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

interface IssuesContextType {
  issues: Issue[]
  issuesIsLoading: boolean
  quantity: number
  getIssues: (search?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [issuesIsLoading, setIssuesIsLoading] = useState(false)

  const quantity = issues.length

  const getIssues = useCallback(async (search?: string) => {
    setIssuesIsLoading(true)

    const response = await api.get(`search/issues`, {
      params: {
        q: `${search ?? ''}repo:${import.meta.env.VITE_GITHUB_API_USERNAME}/${
          import.meta.env.VITE_GITHUB_API_REPO
        }`,
      },
    })

    setIssues(response.data.items)
    setIssuesIsLoading(false)
  }, [])

  useEffect(() => {
    getIssues()
  }, [getIssues])

  return (
    <IssuesContext.Provider
      value={{ getIssues, issues, issuesIsLoading, quantity }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
