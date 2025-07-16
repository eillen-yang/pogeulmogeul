import PostCard from '@/app/(route)/_components/PostCard'
import { faker } from '@faker-js/faker'

export default function Page() {
  return (
    <div className="flex gap-4 pb-64">
      <div className="flex-1/4">
        <PostCard />
      </div>

      <div className="flex-1 p-5 h-full border border-[var(--color-2)] rounded-2xl">
        <p className="mb-5 text-[var(--color-10)] text-lg font-bold">
          이미지
        </p>
        <div className="flex flex-col gap-7">
          <img
            className="w-full rounded-2xl"
            src={faker.image.avatar()}
            alt="상세페이지 이미지"
          />
          <img
            className="w-full rounded-2xl"
            src={faker.image.avatar()}
            alt="상세페이지 이미지"
          />
          <img
            className="w-full rounded-2xl"
            src={faker.image.avatar()}
            alt="상세페이지 이미지"
          />
          <img
            className="w-full rounded-2xl"
            src={faker.image.avatar()}
            alt="상세페이지 이미지"
          />
        </div>
      </div>
    </div>
  )
}
