import { useQuery } from '@tanstack/react-query'
import { useAuthStore } from '../stores/authStore'
import { favoriteService } from '../api/services/favoriteService'

export const useFavoriteList = () => {
  const { token } = useAuthStore()

  return useQuery({
    queryKey: ['favorites', token],
    queryFn: () => favoriteService.getAllFavorites(token!),
    enabled: !!token,
    staleTime: 1000 * 60 * 5, // 5분 캐시 유지
  })
}
