'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { authService } from '../api/services/authService'
import { ModelUser, User } from '../types/User'
import { UserType } from '../types/Auth'

export const useSignup = (type: UserType) => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: async ({
      formData,
      type,
    }: {
      formData: User | ModelUser
      type: UserType
    }) => {
      await authService.signup(formData, type)

      return { formData, type }
    },
    onSuccess: ({ formData, type }) => {
      if (type === 'basic') {
        router.push('/auth/signup/step03')
        return
      }
      if (type === 'model') {
        router.replace('/auth/signup/step02/model')
      } else if (type === 'pro-photo') {
        router.replace('/auth/signup/step02/pro-photo')
      }
    },
    onError: (error: any) => {
      alert(error.message || '회원가입 실패')
    },
  })

  return mutation
}
