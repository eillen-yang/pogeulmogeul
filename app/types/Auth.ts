export type UserType = 'basic' | 'model' | 'pro-photo'

export type LoginFormData = {
  email: string
  passwd: string
  type: UserType
}
