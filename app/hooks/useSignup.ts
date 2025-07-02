import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { authService } from '../api/services/authService'
import { User } from '../types/User'

export const useSignup = (type: 'basic' | 'model' | 'pro-photo') => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: (formData: User) =>
      authService.signup(formData, type),
    onSuccess: () => {
      if (type === 'basic') {
        router.push('/auth/signup/step03')
      }
      if (type === 'model') {
        router.push('/step02/model_user')
      }
      if (type === 'pro-photo') {
        router.push('/step02/photographer')
      }
    },
    onError: (error: any) => {
      alert(error.message || '회원가입 실패')
    },
  })

  return mutation
}
