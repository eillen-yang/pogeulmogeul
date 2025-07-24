import UserPhotoCard from './UserPhotoCard'

interface MylikeContentProps {
  favorites: FavoriteUsers[]
}

export default function MylikeContent({
  favorites,
}: MylikeContentProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {favorites.map((fa: FavoriteUsers) => (
        <UserPhotoCard
          fa={fa}
          key={fa.fid}
        />
      ))}
    </div>
  )
}
