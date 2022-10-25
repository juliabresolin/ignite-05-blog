import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

interface UserContextType {
  user: User
  userIsLoading: boolean
  getUser: () => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [userIsLoading, setUserIsLoading] = useState(false)
  const [user, setUser] = useState<User>({} as User)

  const getUser = useCallback(async () => {
    setUserIsLoading(true)

    const response = await api.get(
      `users/${import.meta.env.VITE_GITHUB_API_USERNAME}`,
    )

    setUser({
      avatar_url: response.data.avatar_url,
      name: response.data.name,
      bio: response.data.bio,
      login: response.data.login,
      company: response.data.company,
      followers: response.data.followers,
      html_url: response.data.html_url,
    })

    setUserIsLoading(false)
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <UserContext.Provider value={{ user, getUser, userIsLoading }}>
      {children}
    </UserContext.Provider>
  )
}
