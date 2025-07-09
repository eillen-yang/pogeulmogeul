import { UserType } from './Auth'

export interface UserInfo {
  uid: number
  name: string
  email: string
  gender: string
  city: string
  nationality: string
  userRank: UserType
  intro: string
  profileBasicImgPath?: string[]
  self: boolean
}
