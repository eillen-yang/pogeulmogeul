'use client'

import { useRouter } from 'next/navigation'
import { authService } from '@/app/api/services/authService'
import { useSignupStore } from '@/app/stores/signupStore'
import { User, ModelUser } from '@/app/types/User'
import { UserType } from '@/app/types/Auth'

// useSignup()과 중복이 너무 많아서 안쓰는 hook
export const useSignupFlow = () => {
  const router = useRouter()
  const { setBasicInfo } = useSignupStore()

  const handleSignupFlow = async (
    data: User,
    signupType: UserType,
  ) => {
    try {
      await authService.signup(data, 'basic')

      if (signupType === 'basic') {
        router.push('/auth/signup/step03')
      } else {
        const userInfo = await authService.getUserInfo(
          data.email,
          'basic',
        )
        setBasicInfo(userInfo, data.email)
        router.push(`/auth/signup/step02/${signupType}`)
      }
    } catch (error: any) {
      alert(error.message || '회원가입 실패')
    }
  }

  return { handleSignupFlow }
}
