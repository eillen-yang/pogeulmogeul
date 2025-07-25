import { useEffect, useState } from 'react'
import { useFavorites } from '@/app/hooks/useFavorites'
import { useAuthStore } from '@/app/stores/authStore'
import { toast } from 'react-hot-toast'
import { favoriteService } from '../api/services/favoriteService'
import { useQuery } from '@tanstack/react-query'

export const useFavoriteToggle = () => {
  const { token } = useAuthStore()
  const { addFavorite, removeFavorite, isAdding, isRemoving } =
    useFavorites()
  const [favoriteMap, setFavoriteMap] = useState<
    Record<number, boolean>
  >({})

  const { data: favorites = [] } = useQuery({
    queryKey: ['favorites'],
    queryFn: () => favoriteService.getAllFavorites(token!),
    enabled: !!token,
    staleTime: 1000 * 60,
  })

  useEffect(() => {
    if (favorites.length > 0) {
      const map = favorites.reduce(
        (acc: Record<number, boolean>, user: FavoriteUsers) => {
          acc[user.fid] = true
          return acc
        },
        {} as Record<string, boolean>,
      )
      setFavoriteMap(map)
    }
  }, [token])

  const toggleFavorite = (uid: number, name: string) => {
    if (!token) {
      toast.error('로그인이 필요합니다.')
      return
    }
    const isFav = favoriteMap[uid] ?? false

    setFavoriteMap((prev) => ({
      ...prev,
      [uid]: !isFav,
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
