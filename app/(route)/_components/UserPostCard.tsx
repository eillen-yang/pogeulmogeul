'use client'

import Link from 'next/link'
import { faker } from '@faker-js/faker'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function UserPostCard() {
  const pathname = usePathname()

  return (
    <div>
      <Link href={`${pathname}/:postId`}>
        <img
          width={140}
          height={140}
          src={faker.image.avatar()}
          alt="모델구해요 게시글 이미지"
        />
      </Link>
      <div>
        <div>
          <span>서울 · </span>
          <span>2024.02.20 13:00</span>
        </div>
        <Link href={`${pathname}/:postId`}>
          스튜디오 촬영 가능한 모델 구합니다! 스튜디오 촬영 가능한
          모델 구합니다!
        </Link>
        <p>
          2024.03.13. 금요일 오후 12:00 ~ 2024.03.13. 금요일 오후
          01:00
        </p>
        <span>85,000원</span>
        <div>
          <span>전신</span>
          <span>기타</span>
        </div>
      </div>
    </div>
  )
}
