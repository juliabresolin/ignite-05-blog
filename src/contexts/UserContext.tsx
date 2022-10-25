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
  expires_in: number
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

    const currentDate = new Date().getTime()
    const userStoraged = JSON.parse(
      localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_USER_KEY)!,
    )

    if (userStoraged && userStoraged.expires_in <= currentDate) {
      setUser(userStoraged)
    } else {
      const response = await api.get(
        `users/${import.meta.env.VITE_GITHUB_API_USERNAME}`,
      )

      const newUser: User = {
        avatar_url: response.data.avatar_url,
        name: response.data.name,
        bio: response.data.bio,
        login: response.data.login,
        company: response.data.company,
        followers: response.data.followers,
        html_url: response.data.html_url,
        expires_in: new Date(new Date().getDate() + 1).getTime(),
      }

      setUser(newUser)
      localStorage.setItem(
        import.meta.env.VITE_LOCAL_STORAGE_USER_KEY,
        JSON.stringify(newUser),
      )
    }

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
