import { UserType, LoginFormData } from '@/app/types/Auth'
import { ModelUser, PhotographerUser, User } from '@/app/types/User'

export const authService = {
  signup: async (
    formData: User | ModelUser | PhotographerUser | FormData,
    type: UserType,
  ) => {
    const isFormData = formData instanceof FormData
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/user/join/${type}`,
      {
        method: 'POST',
        headers: isFormData
          ? undefined
          : { 'Content-Type': 'application/json' },
        body: isFormData ? formData : JSON.stringify(formData),
      },
    )

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || '회원가입에 실패했습니다.')
    }

    return res.json()
  },
  login: async (data: LoginFormData) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    )

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || '로그인에 실패했습니다.')
    }

    return res.json()
  },
}
