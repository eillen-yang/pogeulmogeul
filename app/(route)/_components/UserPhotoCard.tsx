import Link from 'next/link'
import UserPofileCard from './UserPofileCard'
import { faker } from '@faker-js/faker'

export default function UserPhotoCard() {
  return (
    <div className="max-w-[calc(100%/3-6px)] flex-auto">
      <Link
        href={'/:username'}
        className={`relative flex flex-1/3 w-full h-fit pb-[350px] rounded-3xl bg-no-repeat bg-center bg-cover`}
        style={{
          backgroundImage: `url(${faker.image.avatar()})`,
        }}
      >
        <div
          className="flex w-full rounded-3xl"
          style={{
            backgroundImage: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0) 6%,
                rgba(0, 0, 0, 0) 69%,
                #000
                )`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 10%,
                rgba(0, 0, 0, 0.1) 20%,
                rgba(0, 0, 0, 0.2) 30%,
                rgba(0, 0, 0, 0.3) 40%,
                )`,
          }}
          className="absolute w-full left-0 bottom-0 p-5 rounded-bl-3xl rounded-br-3xl"
        >
          <div className="flex flex-col text-white text-2xl font-bold">
            <span className="text-[var(--color-4)]">
              서울 · 내국인
            </span>
            <span>170cm · 58kg</span>
            <span>상 30 · 하 26 · 상 240</span>
          </div>
        </div>
        <span className="absolute bottom-5 right-5 w-10 h-6 bg-white/10 text-white text-[1.4rem] font-bold text-center leading-[2.5rem] rounded-[0.4rem]">
          모델
        </span>
      </Link>
      <UserPofileCard />
    </div>
  )
}
