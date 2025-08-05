import Link from 'next/link'
import { faker } from '@faker-js/faker'
import { PickUser } from '@/app/types/User'
import UserProfileCard from './UserProfileCard'

interface UserPhotoCardProps {
  user?: PickUser
  fa?: FavoriteUsers
  isFavorite: boolean
  onFavoriteToggle: () => void
}

export default function UserPhotoCard({
  user,
  fa,
  isFavorite,
  onFavoriteToggle,
}: UserPhotoCardProps) {
  return (
    <div
      className="w-full"
      key={user?.uid ?? fa?.fid}
    >
      <Link
        href={`/${user?.uid ?? fa?.fid}`}
        className={`relative flex flex-1/3 w-full h-fit pb-[350px] rounded-3xl bg-no-repeat bg-center bg-cover`}
        style={{
          backgroundImage: `url(${faker.image.avatar()})`,
        }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent via-70% to-black/80 rounded-3xl" />

        <div className="absolute w-full left-0 bottom-0 p-5 rounded-bl-3xl rounded-br-3xl z-10">
          <div className="flex flex-col text-[var(--color-2)] text-2xl font-bold">
            <span>
              {user?.city ?? fa?.fcity} ·{' '}
              {user?.nationality ?? fa?.fnationality}
            </span>
            {(user?.userRank ?? fa?.fuserRank) === '모델회원' && (
              <>
                <span>
                  {user?.height ?? fa?.fheight}cm ·{' '}
                  {user?.weight ?? fa?.fweight}kg
                </span>
                <span>
                  상의{user?.top ?? fa?.ftop} · 하의{user?.bottom} ·
                  신발
                  {user?.shoes ?? fa?.fshoes}
                </span>
              </>
            )}
            {(user?.userRank ?? fa?.fuserRank) === '사진기사회원' && (
              <>
                <span>
                  출장 · {user?.businessTrip} | 보정 ·{' '}
                  {user?.correction} | 연출 · {user?.production}
                </span>
              </>
            )}
          </div>
        </div>
        <span className="absolute top-5 right-5 w-auto h-auto px-2 bg-[var(--main-color)] text-white text-2xl font-bold text-center leading-[2.5rem] rounded-[0.4rem]">
          {user?.userRank ?? fa?.fuserRank}
        </span>
      </Link>
      <UserProfileCard
        onFavoriteToggle={onFavoriteToggle}
        isFavorite={isFavorite}
        user={user}
        fa={fa}
      />
    </div>
  )
}
