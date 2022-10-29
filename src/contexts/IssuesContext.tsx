/* eslint camelcase: off */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface Issue {
  number: number
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
  getIssue: (issueNumber: string) => Promise<Issue>
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
        is: 'issue',
      },
    })

    setIssues(response.data.items)
    setIssuesIsLoading(false)
  }, [])

  async function getIssue(issueNumber: string) {
    const response = await api.get(
      `repos/${import.meta.env.VITE_GITHUB_API_USERNAME}/${
        import.meta.env.VITE_GITHUB_API_REPO
      }/issues/${issueNumber}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
        },
      },
    )

    const { number, title, comments, created_at, user, html_url, body } =
      response.data

    return {
      number,
      title,
      comments,
      created_at,
      user,
      html_url,
      body,
    }
  }

  useEffect(() => {
    getIssues()
  }, [getIssues])

  return (
    <IssuesContext.Provider
      value={{ getIssues, issues, issuesIsLoading, quantity, getIssue }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
