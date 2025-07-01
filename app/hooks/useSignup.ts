import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { authService } from '../api/services/authService'
import { User } from '../types/User'

export const useSignup = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: (formData: User) => authService.signup(formData),
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.')
      router.push('/step03')
    },
    onError: (error: any) => {
      alert(error.message || '회원가입 실패')
    },
  })

  return mutation
}
