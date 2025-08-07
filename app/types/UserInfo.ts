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

export interface PickInfo {
  uid: number
  email: string
  passwd: string
  name: string
  gender: string
  nationality: string
  city: string
  intro: string
  profileMainImg: string | null
  profileBasicImgPath: string[]
  userRank: string
  height: string | null
  weight: string | null
  top: string | null
  bottom: string | null
  shoes: string | null
  profileModelImgPath: string[]
  businessTrip: string | null
  correction: string | null
  production: string | null
  profileProPhotoImgPath: string[]
  portfolioPath: string | null
  url: string | null
  social: boolean
  model: boolean
  proPhoto: boolean
}

export interface AllUserInfo {
  requestBody: {
    uid: number
    email: string
    passwd: string
    name: string
    gender: string
    nationality: string
    city: string
    intro: string
    profileMainImg: string | null
    profileBasicImgPath: string[]
    userRank: string
    height: string | null
    weight: string | null
    top: string | null
    bottom: string | null
    shoes: string | null
    profileModelImgPath: string[]
    businessTrip: string | null
    correction: string | null
    production: string | null
    profileProPhotoImgPath: string[]
    portfolioPath: string | null
    url: string | null
    social: boolean
    model: boolean
    proPhoto: boolean
  }
  self: boolean
}
