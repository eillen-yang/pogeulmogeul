import { create } from 'zustand'

type CheckStore = {
  emailChecked: boolean
  nicknameChecked: boolean
  setEmailChecked: (value: boolean) => void
  setNicknameChecked: (value: boolean) => void
}

export const useCheckStore = create<CheckStore>((set) => ({
  emailChecked: false,
  nicknameChecked: false,
  setEmailChecked: (value) => set({ emailChecked: value }),
  setNicknameChecked: (value) => set({ nicknameChecked: value }),
}))
