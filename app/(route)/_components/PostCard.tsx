'use client'

import Image from 'next/image'
import Link from 'next/link'
import dummy from '@/public/dummy.svg'
import background from '@/public/sample.jpg'
import catting from '@/public/icon/white_talk.svg'
import calendar from '@/public/icon/gray_calendar.svg'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { usePost } from '@/app/hooks/usePost'
import dayjs from 'dayjs'
import { usePosts } from '@/app/hooks/usePosts'
import { useAuthStore } from '@/app/stores/authStore'
import { postService } from '@/app/api/services/postService'
import { useFavoriteToggle } from '@/app/hooks/useFavoriteToggle'
import { FavoriteButton } from './FavoriteButton'

export default function PostCard() {
  const router = useRouter()
  const cateType = usePathname()
  const params = useParams()
  const postId = Number(params?.postId)

  const { favoriteMap, toggleFavorite } = useFavoriteToggle()

  const meEmail = useAuthStore((state) => state.user?.email || '')
  const token = useAuthStore((state) => state.token)

  const { data: postList } = usePosts(cateType)
  const matchedPostEmail = postList?.find(
    (post) => post.bid === postId,
  )

  const email = matchedPostEmail?.baseBoard.email || ''
  const matchedPostId = postList?.find((post) => post.bid === postId)
  const id = matchedPostId?.bid || 0

  const { data, isLoading, error } = usePost(postId, email, cateType)
  console.log('data', data)

  const createAt = dayjs(data?.createAt).format('YYYY.MM.DD HH:mm')
  const firstDate = dayjs(data?.firstDate).format('YYYY.MM.DD HH:mm')
  const lastDate = dayjs(data?.lastDate).format('YYYY.MM.DD HH:mm')
  const formatted = data?.price?.toLocaleString()

  const handleDelete = async () => {
    if (!token) {
      alert('로그인이 필요합니다.')
      return
    }

    const confirmDelete = confirm('정말 삭제하시겠습니까 ?')
    if (!confirmDelete) return

    try {
      await postService.delete(cateType, id, email, token)
      alert('게시물이 삭제되었습니다.')
      router.push('/')
    } catch (error: any) {
      console.error('삭제 실패', error)
      alert(`삭제 실패 : ${error.message}`)
    }
  }

  if (isLoading || !email || !postId || isNaN(postId))
    return <div>로딩 중 입니다...</div>
  if (error)
    return (
      <div>
        {error.message.includes('findBoard is null')
          ? '해당 게시글이 존재하지 않거나 삭제되었습니다.'
          : `에러 발생: ${error.message}`}
      </div>
    )

  return (
    <div>
      <Image
        className="border boder-[var(--color-1)] rounded-3xl"
        height={560}
        src={background}
        alt="프로필 배경 이미지"
      />
      <div className="relative px-5">
        <div className="pb-10 border-[var(--color-8)] border-b">
          <div className="flex flex-col gap-4 absolute left-1/6 top-0 -translate-x-1/2 -translate-y-1/2">
            <Image
              width={80}
              height={80}
              src={dummy}
              alt="내 프로필"
            />
            <div className="flex items-start justify-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">
                  {data.name}
                </span>
                <span className="text-lg text-[var(--color-6)] font-medium">
                  {data.userRank}
                </span>
              </div>
              {meEmail !== email && (
                <FavoriteButton
                  isActive={favoriteMap[data.name] ?? false}
                  onClick={() => toggleFavorite(data.name)}
                />
              )}
            </div>
          </div>
          <div className="pl-56 mt-8 flex flex-col gap-3">
            <Link
              href={`/${data.name}/calender`}
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
            {meEmail === email ? (
              <button
                onClick={handleDelete}
                className="flex items-center justify-center gap-1.5 h-14 bg-[var(--red-color)] text-[var(--color-1)] font-bold text-xl rounded-xl"
              >
                <span>삭제하기</span>
              </button>
            ) : (
              <Link
                href={`/${data.name}/catting`}
                className="flex items-center justify-center gap-1.5 h-14 bg-[var(--main-color)] text-[var(--color-1)] font-bold text-xl rounded-xl"
              >
                <Image
                  width={12}
                  height={12}
                  src={catting}
                  alt="제안하기"
                />
                <span>제안하기</span>
              </Link>
            )}
          </div>
        </div>
        <div className="mt-8 text-2xl">
          <div className="flex flex-col gap-2">
            <span className="text-[var(--color-4)] font-medium">
              {createAt}
            </span>
            <p className="font-bold">{data.title}</p>
            <div>
              <strong className="text-[var(--red-color)]">
                {formatted}
              </strong>
              <span className="text-[var(--color-4)] font-medium">
                원
              </span>
            </div>
          </div>
          <div className="pt-10 flex flex-col gap-10 text-xl">
            <div className="flex flex-col gap-5">
              <div className="flex py-4 px-5 rounded-2xl border border-[var(--color-1)]">
                <span className="flex-1 font-bold">카테고리</span>
                <p className="flex-3/5 font-normal">
                  {data.category}
                </p>
              </div>
              <div className="flex gap-2 py-4 px-5 rounded-2xl border border-[var(--color-1)]">
                <span className="flex-1 font-bold">날짜/시간</span>
                <p className="flex-3/5 font-normal">
                  {firstDate} ~ {lastDate}
                </p>
              </div>
              <div className="flex py-4 px-5 rounded-2xl border border-[var(--color-1)]">
                <span className="flex-1 font-bold">지역</span>
                <p className="flex-3/5 font-normal">{data.place}</p>
              </div>
            </div>

            <div className="py-4 px-5 rounded-2xl border border-[var(--color-1)]">
              <span className="font-bold">상세내용</span>
              <p className="pt-3 font-normal">{data.contents}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
