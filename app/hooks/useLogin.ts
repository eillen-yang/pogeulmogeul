'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { LoginFormData, UserType } from '../types/Auth'
import { authService } from '../api/services/authService'
import { useAuthStore } from '../stores/authStore'
import { userService } from '../api/services/userService'
import { toast } from 'react-hot-toast'

export const useLogin = () => {
  const router = useRouter()
  const setAuth = useAuthStore((state) => state.setAuth)

  const mutation = useMutation({
    mutationFn: async (data: LoginFormData & { type: UserType }) => {
      const loginRes = await authService.login(data)
      const userInfo = await userService.getUserInfo(
        data.email,
        data.type,
      )
      return {
        token: loginRes.token,
        user: userInfo,
      }
    },
    onSuccess: ({ token, user }) => {
      setAuth(user, token)

      const redirectTo =
        localStorage.getItem('redirectAfterLogin') || '/'
      localStorage.removeItem('redirectAfterLogin')

      toast.success('로그인되었습니다 !')
      setTimeout(() => {
        router.replace(redirectTo)
      }, 1000)
    },
    onError: (error: any) => {
      toast.error('로그인 실패했습니다 !')
      console.log(error.message || '로그인 실패')
    },
  })

  return mutation
}
