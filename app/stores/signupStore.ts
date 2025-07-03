import { create } from 'zustand'
import { ModelUser, User } from '../types/User'
import { persist } from 'zustand/middleware'

type SignupState = {
  basicInfo: Partial<User> | null
  userEmail: string | null
  setBasicInfo: (info: Partial<User>, email: string) => void
  clearSignup: () => void
}

export const useSignupStore = create(
  persist<SignupState>(
    (set) => ({
      basicInfo: null,
      userEmail: null,
      setBasicInfo: (info, email) =>
        set({ basicInfo: info, userEmail: email }),
      clearSignup: () => set({ basicInfo: null, userEmail: null }),
    }),
    {
      name: 'signup-storage',
    },
  ),
)
