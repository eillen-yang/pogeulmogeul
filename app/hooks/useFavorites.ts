import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useAuthStore } from '../stores/authStore'
import { favoriteService } from '../api/services/favoriteService'
import { toast } from 'react-hot-toast'

export const useFavorites = () => {
  const queryClient = useQueryClient()
  const { token } = useAuthStore()

  const addFavoriteMutation = useMutation({
    mutationFn: (name: string) =>
      favoriteService.addFavorite({ name, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    },
    onError: () => {
      toast.error('즐겨찾기추가 처리 중 문제가 발생했어요.')
    },
  })

  const removeFavoriteMutation = useMutation({
    mutationFn: (name: string) =>
      favoriteService.removeFavorite({ name, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    },
    onError: () => {
      toast.error('즐겨찾기취소 처리 중 문제가 발생했어요.')
    },
  })

  return {
    addFavorite: addFavoriteMutation.mutate,
    removeFavorite: removeFavoriteMutation.mutate,
    isAdding: addFavoriteMutation.isPending,
    isRemoving: removeFavoriteMutation.isPending,
  }
}
