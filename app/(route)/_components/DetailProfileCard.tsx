import Image from 'next/image'
import Link from 'next/link'
import dummy from '@/public/dummy.svg'
import background from '@/public/sample.jpg'
import catting from '@/public/icon/white_talk.svg'
import calendar from '@/public/icon/gray_calendar.svg'
import heart from '@/public/icon/profile_heart.svg'
import { UserInfo } from '@/app/types/UserInfo'

interface DetailProfileCardProps {
  user: UserInfo
}

export default function DetailProfileCard({
  user,
}: DetailProfileCardProps) {
  console.log('user', user)

  return (
    <div>
      <Image
        className="border boder-[var(--color-1)] rounded-3xl"
        height={560}
        src={background}
        alt="프로필 배경 이미지"
      />
      <div className="relative px-5">
        <div className="pb-10">
          <div className="flex items-end gap-4 absolute left-40 -top-1/9 -translate-x-1/2 -translate-y-1/2">
            <Image
              width={80}
              height={80}
              src={
                user.profileBasicImgPath &&
                user.profileBasicImgPath.length > 0
                  ? user.profileBasicImgPath[0]
                  : dummy
              }
              alt="내 프로필"
            />
            <div className="flex items-start justify-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">
                  {user.name}
                </span>
                <span className="text-lg text-[var(--color-6)] font-medium">
                  {user.userRank}
                </span>
              </div>
              <button>
                <Image
                  width={20}
                  height={20}
                  src={heart}
                  alt="좋아요"
                />
              </button>
            </div>
          </div>
          <div className="mt-28 flex flex-col gap-3">
            <Link
              href={'/calendar'}
              className="flex items-center justify-center gap-1.5 h-14 bg-[var(--color-1)] text-[var(--color-8)] font-bold text-xl rounded-xl"
            >
              <Image
                width={12}
                height={12}
                src={calendar}
                alt="캘린더 보기"
              />
              <span>캘린더 보기</span>
            </Link>
            <Link
              href={user.self ? '/chat' : '/me/edit'}
              className="flex items-center justify-center gap-1.5 h-14 bg-[var(--main-color)] text-[var(--color-1)] font-bold text-xl rounded-xl"
            >
              <Image
                width={12}
                height={12}
                src={catting}
                alt="제안하기"
              />
              <span>
                {user.self ? '제안하기' : '내 프로필 수정/등록'}
              </span>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <div className="text-xl">
              <span className="text-black font-bold">이메일</span>
              <p className="font-medium text-[var(--color-6)]">
                {user.email}
              </p>
            </div>
            <div className="text-xl">
              <span className="text-black font-bold">지역</span>
              <p className="font-medium text-[var(--color-6)]">
                {user.city}
              </p>
            </div>
            <div className="text-xl">
              <span className="text-black font-bold">성별</span>
              <p className="font-medium text-[var(--color-6)]">
                {user.gender}
              </p>
            </div>
            <div className="text-xl">
              <span className="text-black font-bold">내/외국인</span>
              <p className="font-medium text-[var(--color-6)]">
                {user.nationality}
              </p>
            </div>

            {user.intro !== '' ? (
              <div>
                <span className="text-lg text-black font-bold">
                  소개
                </span>
                <p className="font-medium text-[var(--color-6)]">
                  {user.intro}
                </p>
              </div>
            ) : null}
          </div>

          {/* 일반 회원이 아닐경우 */}
          <div className="pt-10 flex flex-col gap-5">
            {/* 모델일 경우 */}
            <div className="flex py-4 px-5 rounded-2xl border border-[var(--color-1)]">
              <span className="flex-1 text-lg font-bold">몸무게</span>
              <p className="flex-3/5 text-lg font-normal">53kg</p>
            </div>
            <div className="flex gap-2 py-4 px-5 rounded-2xl border border-[var(--color-1)]">
              <span className="flex-1 text-lg font-bold">키</span>
              <p className="flex-3/5 text-lg font-normal">174cm</p>
            </div>
            <div className="flex py-4 px-5 rounded-2xl border border-[var(--color-1)]">
              <span className="flex-1 text-lg font-bold">상의</span>
              <p className="flex-3/5 text-lg font-normal">S</p>
            </div>
            <div className="flex py-4 px-5 rounded-2xl border border-[var(--color-1)]">
              <span className="flex-1 text-lg font-bold">하의</span>
              <p className="flex-3/5 text-lg font-normal">S</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
