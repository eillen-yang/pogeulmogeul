import Image from 'next/image'
import Link from 'next/link'
import profile from '@/public/dummy.svg'
import arrowRight from '@/public/icon/arrow_right.svg'
import calendar from '@/public/icon/profile_calendar.svg'
import talk from '@/public/icon/profile_talk.svg'
import heart from '@/public/icon/profile_heart.svg'

export default function UserPofileCard() {
  return (
    <div className="flex justify-between py-3 px-2.5">
      <div className="flex items-center gap-4">
        <Link href={'/:username'}>
          <Image
            width={46}
            height={46}
            src={profile}
            alt="profile"
          />
        </Link>
        <div>
          <span className="text-[var(--color-5)] text-lg">
            일반회원
          </span>
          <Link
            href={'/:username'}
            className="flex items-center"
          >
            <span className="text-2xl font-semibold">대상혁</span>
            <Image
              src={arrowRight}
              alt="링크이동"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link href={'/:username/calendar'}>
          <Image
            width={20}
            height={20}
            src={calendar}
            alt="캘린더"
          />
        </Link>
        <Link href={'/:username/chatting'}>
          <Image
            width={20}
            height={20}
            src={talk}
            alt="채팅"
          />
        </Link>
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
  )
}
