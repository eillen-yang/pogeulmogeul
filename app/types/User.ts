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
  File: FileList
}
