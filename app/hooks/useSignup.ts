'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { authService } from '../api/services/authService'
import { ModelUser, PhotographerUser, User } from '../types/User'
import { UserType } from '../types/Auth'

type SignupPayload = {
  formData: User | ModelUser | PhotographerUser | FormData
  signupType: UserType
  redirectType: UserType
}
export const useSignup = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: async ({ formData, signupType }: SignupPayload) => {
      await authService.signup(formData, signupType)
    },
    onSuccess: (_, variables) => {
      const { redirectType } = variables

      if (redirectType === 'basic') {
        router.push('/auth/signup/step03')
      } else if (redirectType === 'model') {
        router.push('/auth/signup/step02/model')
      } else if (redirectType === 'pro-photo') {
        router.push('/auth/signup/step02/pro-photo')
      }
    },
    onError: (error: any) => {
      alert(error.message || '회원가입 실패')
    },
  })

  return mutation
}
