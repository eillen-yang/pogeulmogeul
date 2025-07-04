// /app/stores/authStore.ts
import { create } from 'zustand'

type User = {
  id: string
  name: string
  email: string
}

type AuthState = {
  user: User | null
  token: string | null
  setAuth: (user: User, token: string) => void
  logout: () => void
  initialize: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

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
    set({ user: null, token: null })
  },

  initialize: () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user && user !== 'undefined') {
      try {
        const parsed = JSON.parse(user)
        set({
          token,
          user: parsed,
        })
      } catch (error) {
        console.error(
          'Failed to parse user from localStorage:',
          error,
        )
      }
    }
  },
}))
