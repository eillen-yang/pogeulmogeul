import { Auth } from '@/app/types/Auth'
import { User } from '@/app/types/User'

export const authService = {
  signup: async (formData: User, type: Auth) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/user/join/${type}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      },
    )

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || '회원가입에 실패했습니다.')
    }

    return res.json()
  },
}
