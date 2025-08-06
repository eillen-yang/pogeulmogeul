import { useMemo } from 'react'
import { useFavoriteList } from './useFavoriteList'

export const useFavoriteStatus = (uid?: number, uEmail?: string) => {
  const { data: favorites = [], isPending } = useFavoriteList()

  const isFavorite = useMemo(() => {
    if (!uid) return false
    return favorites.some(
      (f: FavoriteUsers) => f.fid === uid || f.email === uEmail,
    )
  }, [uid, favorites])

  return {
    isFavorite,
    isPending,
  }
}
