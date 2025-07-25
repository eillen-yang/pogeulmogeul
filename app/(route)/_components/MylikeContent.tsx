import UserPhotoCard from './UserPhotoCard'

interface MylikeContentProps {
  favorites: FavoriteUsers[]
  favoriteMap: Record<number, boolean>
  onFavoriteToggle: (uid: number, name: string) => void
}

export default function MylikeContent({
  favorites,
  favoriteMap,
  onFavoriteToggle,
}: MylikeContentProps) {
  if (favorites.length === 0) {
    return (
      <div className="flex items-center justify-center py-40 text-2xl font-semibold border border-[var(--main-color)] text-[var(--main-color)] rounded-3xl">
        <p>즐겨찾기한 사용자가 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {favorites.map((fa: FavoriteUsers) => (
        <UserPhotoCard
          fa={fa}
          key={fa.fid}
          isFavorite={favoriteMap[fa.fid] ?? false}
          onFavoriteToggle={() => onFavoriteToggle(fa.fid, fa.name)}
        />
      ))}
    </div>
  )
}
