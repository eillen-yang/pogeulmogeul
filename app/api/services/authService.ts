import { RegisterFormData } from '@/app/(auth)/auth/_components/RegisterForm'

export const authService = {
  signup: async (formData: RegisterFormData) => {
    const res = await fetch('/user/join/basic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || '회원가입에 실패했습니다.')
    }

    return res.json()
  },
}
