import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoriteState {
  favorites: FavoriteUsers[]
  favoriteMap: Record<string, boolean>
  setFavorites: (users: FavoriteUsers[]) => void
  toggleFavorite: (userName: string) => void
  isFavorite: (userName: string) => boolean
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],
      favoriteMap: {},
      setFavorites: (users) => {
        const map: Record<string, boolean> = {}
        users.forEach((user) => {
          map[user.name] = true
        })
        set({ favorites: users, favoriteMap: map })
      },
      toggleFavorite: (userName) => {
        const map = { ...get().favoriteMap }
        map[userName] = !map[userName]
        set({ favoriteMap: map })
      },
      isFavorite: (userName) => !!get().favoriteMap[userName],
    }),
    {
      name: 'favorite-storage',
      partialize: (state) => ({
        favorites: state.favorites,
        favoriteMap: state.favoriteMap,
      }),
    },
  ),
)
