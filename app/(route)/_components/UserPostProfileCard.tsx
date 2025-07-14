'use client'

import UserPofileCard from './UserPofileCard'
import UserPostCard from './UserPostCard'
import { usePosts } from '@/app/hooks/usePost'
import { usePathname } from 'next/navigation'

export default function UserPostProfileCard() {
  const pathname = usePathname()
  const { data, isLoading, error } = usePosts(pathname)

  console.log('data', data)

  if (isLoading) return <div>로딩중...</div>
  if (error) return <div>에러 발생 : {error.message}</div>

  if (data?.length === 0) {
    return (
      <div className="flex items-center justify-center w-full min-h-80 border border-[var(--main-color)] rounded-2xl text-xl font-semibold text-[var(--main-color)] text-center">
        <p>
          아직 게시물이 없습니다.
          <br />
          가장 먼저 게시글을 작성해보세요!
        </p>
      </div>
    )
  }

  return (
    <>
      {data?.map((post) => (
        <div
          className="border border-[var(--color-3)] rounded-3xl"
          key={post.bid}
        >
          <UserPostCard
            post={post}
            pathname={pathname}
          />
          <hr className="mx-auto w-11/12 text-center text-[var(--color-3)]" />
          <UserPofileCard />
        </div>
      ))}
    </>
  )
}
