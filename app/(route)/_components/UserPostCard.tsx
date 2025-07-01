import Link from 'next/link'
import { faker } from '@faker-js/faker'
import Image from 'next/image'

type Props = {
  url: string
}

export default function UserPostCard({ url }: Props) {
  return (
    <div className="flex p-3">
      <Link href={`${url}/:postId`}>
        <img
          width={160}
          height={160}
          src={faker.image.avatar()}
          className="rounded-3xl"
          alt="모델구해요 게시글 이미지"
        />
      </Link>
      <div className="flex flex-col gap-1.5 pl-3 mt-2">
        <div className="text-lg text-[var(--color-4)] font-semibold">
          <span>서울 · </span>
          <span>2024.02.20 13:00</span>
        </div>
        <Link
          href={`${url}/:postId`}
          className="text-2xl text-[var(--color-10)] font-bold leading-none"
        >
          스튜디오 촬영 가능한 모델 구합니다! 스튜디오 촬영 가능한
          모델 구합니다!
        </Link>
        <p className="text-lg text-[var(--color-6)] font-semibold">
          03.13. 금요일 오후 12:00 ~ 03.13. 금요일 오후 01:00
        </p>
        <span className="text-[var(--foreground)] text-xl font-bold">
          85,000원
        </span>
        <div className="flex items-center gap-2.5 text-lg text-[var(--main-color)]">
          <span className="py-1 px-4 border border-[var(--main-color)] rounded-3xl">
            전신
          </span>
          <span className="py-1 px-4 border border-[var(--main-color)] rounded-3xl">
            기타
          </span>
        </div>
      </div>
    </div>
  )
}
