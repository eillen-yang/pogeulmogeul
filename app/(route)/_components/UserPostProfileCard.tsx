'use client'

import UserProfileCard from './UserProfileCard'
import UserPostCard from './UserPostCard'
import { usePosts } from '@/app/hooks/usePosts'
import { usePathname } from 'next/navigation'

interface Props {
  url?: string
}

export default function UserPostProfileCard({ url }: Props) {
  const fallbackPathname = usePathname()
  const pathname = url || fallbackPathname
  const { data, isLoading, error } = usePosts(pathname)

  const isMainPage = fallbackPathname === '/'

  console.log('게시글 리스트 data : ', data, pathname)

  if (isLoading)
    return (
      <div>
        <span>로딩중...</span>
      </div>
    )
  if (error)
    return (
      <div className="text-red-500 border border-[var(--red-color)] rounded-2xl w-full min-h-96 text-xl font-medium flex items-center justify-center">
        <span>에러 발생 : {error.message}</span>
      </div>
    )

  const postList = isMainPage ? data?.slice(0, 1) : data

  if (!postList || postList.length === 0) {
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
      {postList?.map((post) => (
        <div
          className="border border-[var(--color-3)] rounded-3xl"
          key={post.bid}
        >
          <UserPostCard
            post={post}
            pathname={pathname}
          />
          <hr className="mx-auto w-11/12 text-center text-[var(--color-3)]" />
          <UserProfileCard post={post} />
        </div>
      ))}
    </>
  )
}
