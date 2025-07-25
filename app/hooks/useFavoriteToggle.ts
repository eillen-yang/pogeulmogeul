import { useState } from 'react'
import { useFavorites } from '@/app/hooks/useFavorites'
import { useAuthStore } from '@/app/stores/authStore'
import { toast } from 'react-hot-toast'

export const useFavoriteToggle = () => {
  const { token } = useAuthStore()
  const { addFavorite, removeFavorite } = useFavorites()
  const [favoriteMap, setFavoriteMap] = useState<
    Record<number, boolean>
  >({})

  const toggleFavorite = (uid: number, name: string) => {
    const isFav = favoriteMap[uid] ?? false

    if (!token) {
      toast.error('로그인이 필요합니다.')
      return
    }

    if (isFav) {
      removeFavorite(name)
    } else {
      addFavorite(name)
    }

    setFavoriteMap((prev) => ({
      ...prev,
      [uid]: !isFav,
    }))
  }

  return {
    favoriteMap,
    toggleFavorite,
    setFavoriteMap,
  }
}
