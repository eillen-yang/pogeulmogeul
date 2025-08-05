import Image from 'next/image'
import Link from 'next/link'
import profile from '@/public/dummy.svg'
import arrowRight from '@/public/icon/arrow_right.svg'
import calendar from '@/public/icon/profile_calendar.svg'
import talk from '@/public/icon/profile_talk.svg'
import { PostList } from '@/app/types/Post'
import { PickUser } from '@/app/types/User'
import { FavoriteButton } from './FavoriteButton'

interface UserPofileCardProps {
  user?: PickUser
  post?: PostList
  fa?: FavoriteUsers
  isFavorite: boolean
  onFavoriteToggle: () => void
}

export default function UserProfileCard({
  user,
  post,
  fa,
  isFavorite,
  onFavoriteToggle,
}: UserPofileCardProps) {
  return (
    <div className="flex justify-between py-3 px-4">
      <div className="flex items-center gap-4">
        <Link href={`/${user?.uid ?? fa?.fid}`}>
          <Image
            width={46}
            height={46}
            src={
              // user.profileBasicImgPath &&
              // user.profileBasicImgPath.length > 0
              //   ? user.profileBasicImgPath[0]
              //   :
              profile
            }
            alt="profile"
          />
        </Link>
        <div>
          <span className="text-[var(--color-5)] text-lg">
            {/* 일반회원 */}
            {user?.userRank ?? fa?.fuserRank ?? '일반회원'}
          </span>
          <Link
            href={`/${user?.uid ?? post?.bid ?? fa?.fid}`}
            className="flex items-center"
          >
            <span className="text-2xl font-semibold">
              {/* 닉네임 */}
              {user?.name ?? post?.baseBoard.email ?? fa?.name}
            </span>
            <Image
              src={arrowRight}
              alt="링크이동"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link href={`/${user?.uid ?? post?.bid ?? fa?.fid}/calender`}>
          <Image
            width={20}
            height={20}
            src={calendar}
            alt="캘린더"
          />
        </Link>
        <Link href={`/${user?.uid ?? post?.bid ?? fa?.fid}/catting`}>
          <Image
            width={20}
            height={20}
            src={talk}
            alt="채팅"
          />
        </Link>
        <FavoriteButton
          isActive={isFavorite}
          onClick={onFavoriteToggle}
        />
      </div>
    </div>
  )
}
