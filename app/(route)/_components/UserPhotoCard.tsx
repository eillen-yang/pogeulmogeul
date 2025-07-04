import Link from 'next/link'
import UserPofileCard from './UserPofileCard'
import { faker } from '@faker-js/faker'

export default function UserPhotoCard() {
  return (
    <div className="w-full">
      <Link
        href={'/:username'}
        className={`relative flex flex-1/3 w-full h-fit pb-[350px] rounded-3xl bg-no-repeat bg-center bg-cover`}
        style={{
          backgroundImage: `url(${faker.image.avatar()})`,
        }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent via-70% to-black/80 rounded-3xl" />

        <div className="absolute w-full left-0 bottom-0 p-5 rounded-bl-3xl rounded-br-3xl z-10">
          <div className="flex flex-col text-[var(--color-2)] text-2xl font-bold">
            <span>서울 · 내국인</span>
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
