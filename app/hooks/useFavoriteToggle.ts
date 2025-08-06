import { useEffect, useState } from 'react'
import { useFavorites } from '@/app/hooks/useFavorites'
import { useAuthStore } from '@/app/stores/authStore'
import { toast } from 'react-hot-toast'
import { favoriteService } from '../api/services/favoriteService'
import { useQuery } from '@tanstack/react-query'

export const useFavoriteToggle = () => {
  const { token, user } = useAuthStore()
  const { addFavorite, removeFavorite, isAdding, isRemoving } =
    useFavorites()
  const [favoriteMap, setFavoriteMap] = useState<
    Record<string, boolean>
  >({})

  const { data: favorites = [] } = useQuery<FavoriteUsers[]>({
    queryKey: ['favorites'],
    queryFn: () => favoriteService.getAllFavorites(token!),
    enabled: !!token,
    staleTime: 1000 * 60,
  })

  useEffect(() => {
    if (favorites.length > 0) {
      const map = favorites.reduce(
        (acc: Record<string, boolean>, favUser) => {
          acc[favUser.name] = true
          acc[favUser.email] = true
          return acc
        },
        {},
      )
      setFavoriteMap(map)
    }
  }, [token, favorites])

  const toggleFavorite = (name: string) => {
    if (!token) {
      toast.error('로그인이 필요합니다.')
      return
    }
    if (user?.name === name) {
      toast('자기 자신은 즐겨찾기 할 수 없습니다.')
      return
    }
    const isFav = favoriteMap[name] ?? false

    setFavoriteMap((prev) => ({
      ...prev,
      [name]: !isFav,
    }))

    if (isFav) {
      removeFavorite(name)
    } else {
      addFavorite(name)
    }
  }

  return {
    favorites,
    favoriteMap,
    toggleFavorite,
    setFavoriteMap,
    isAdding,
    isRemoving,
  }
}
