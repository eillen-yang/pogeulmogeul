import Image from 'next/image'
import Link from 'next/link'
import profile from '@/public/dummy.svg'
import arrowRight from '@/public/icon/arrow_right.svg'
import calendar from '@/public/icon/profile_calendar.svg'
import talk from '@/public/icon/profile_talk.svg'
import heart from '@/public/icon/profile_heart.svg'

export default function UserPofileCard() {
  return (
    <div className="flex justify-between">
      <div>
        <Link href={'/:username'}>
          <Image
            width={64}
            height={64}
            src={profile}
            alt="profile"
          />
        </Link>
        <div>
          <span>일반회원</span>
          <Link href={'/:username'}>
            <span>대상혁</span>
            <Image
              src={arrowRight}
              alt="링크이동"
            />
          </Link>
        </div>
      </div>
      <div>
        <Link href={'/:username/calendar'}>
          <Image
            src={calendar}
            alt="캘린더"
          />
        </Link>
        <Link href={'/:username/chatting'}>
          <Image
            src={talk}
            alt="채팅"
          />
        </Link>
        <button>
          <Image
            src={heart}
            alt="좋아요"
          />
        </button>
      </div>
    </div>
  )
}
