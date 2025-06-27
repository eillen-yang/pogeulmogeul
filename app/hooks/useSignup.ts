import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { RegisterFormData } from '../(auth)/auth/_components/RegisterForm'
import { authService } from '../api/services/authService'

export const useSignup = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: (formData: RegisterFormData) =>
      authService.signup(formData),
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
