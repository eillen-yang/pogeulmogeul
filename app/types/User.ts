export interface User {
  email: string
  passwd: string
  passwd2: string
  name: string
  gender: string
  nationality: string
  city: string
  intro?: string
}

export interface BasicUser {
  email: string
  name: string
  gender: string
  city: string
  nationality: string
  intro: string
  userRank: string
  profileBasicImgPath: string[]
  self: boolean
}

export interface ModelUser {
  email: string
  height: string
  weight: string
  top: string
  bottom: string
  shoes: string
}

export interface PhotographerUser {
  RequestBody: {
    email: string
    businessTrip: string
    correction: string
    production: string
    url: string
  }
  File?: string
}

export interface PickUser {
  uid: number
  name: string
  email: string
  passwd: string
  gender: '남성' | '여성'
  nationality: string
  city: string
  height: string
  weight: string
  top: string
  bottom: string
  shoes: string
  intro: string
  profileMainImg: string | null
  profileBasicImgPath: string[]
  profileModelImgPath: string[]
  profileProPhotoImgPath: string[]
  portfolioPath: string | null
  businessTrip: string | null
  correction: string | null
  production: string | null
  url: string | null
  social: boolean
  model: boolean
  proPhoto: boolean
  userRank: '일반회원' | '모델회원' | '사진기사회원'
}
