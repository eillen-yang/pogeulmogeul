import { create } from 'zustand'
import { UserType } from '../types/Auth'

type User = {
  id: string
  name: string
  email: string
  role: UserType
}

type AuthState = {
  user: User | null
  token: string | null
  isInitialized: boolean
  setAuth: (user: User, token: string) => void
  logout: () => void
  initialize: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isInitialized: false,

  setAuth: (user, token) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }
    if (token) {
      localStorage.setItem('token', token)
    }
    set({ user, token })
  },

  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    set({ user: null, token: null, isInitialized: true })
  },

  initialize: () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) {
      try {
        const parsed = JSON.parse(user)
        set({
          token,
          user: parsed,
          isInitialized: true,
        })
      } catch (error) {
        console.error(
          'Failed to parse user from localStorage:',
          error,
        )
        set({ isInitialized: true })
      }
    } else {
      set({ isInitialized: true })
    }
  },
}))
