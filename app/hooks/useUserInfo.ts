import { useQuery } from '@tanstack/react-query'
import { UserType } from '../types/Auth'
import { userService } from '../api/services/userService'
import { AllUserInfo, UserInfo } from '../types/UserInfo'

export const useUserInfo = (email: string, type: UserType) => {
  return useQuery<AllUserInfo, Error>({
    queryKey: ['userInfo', email, type],
    queryFn: () => userService.getUserInfo(email, type),
    enabled: !!email && !!type,
    staleTime: 100 * 60 * 5, // 5분 캐싱
    retry: 1, // 재시도 1번
  })
}
