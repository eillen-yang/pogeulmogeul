import Link from 'next/link'
import { faker } from '@faker-js/faker'
import { PostList } from '@/app/types/Post'
import dayjs from 'dayjs'

type Props = {
  post?: PostList
  pathname?: string
}

export default function UserPostCard({ post, pathname }: Props) {
  const createAt = dayjs(post?.baseBoard.createAt).format(
    'YYYY.MM.DD HH:mm',
  )
  const firstDate = dayjs(post?.baseBoard.firstDate).format(
    'YYYY.MM.DD HH:mm',
  )
  const lastDate = dayjs(post?.baseBoard.lastDate).format(
    'YYYY.MM.DD HH:mm',
  )
  const formatted = post?.price?.toLocaleString()

  return (
    <>
      <div
        className="flex gap-3 p-3"
        key={post?.bid}
      >
        <Link
          href={`${pathname}/${post?.bid}`}
          className="flex-none"
        >
          <img
            width={140}
            src={faker.image.avatar()}
            className="rounded-3xl"
            alt="모델구해요 게시글 이미지"
          />
        </Link>
        <div className="flex flex-col gap-1.5">
          <div className="text-lg text-[var(--color-4)] font-semibold">
            <span>{post?.place} · </span>
            <span>{createAt}</span>
          </div>
          <Link
            href={`${pathname}/${post?.bid}`}
            className="pr-1.5 line-clamp-2 text-2xl text-[var(--color-10)] font-bold leading-none"
          >
            {post?.baseBoard?.title}
          </Link>
          <p className="text-xl text-[var(--color-6)] font-semibold">
            {firstDate} ~ {lastDate}
          </p>
          {!formatted || formatted === '0' ? (
            <span className="text-[var(--foreground)] text-xl font-bold">
              무료지원
            </span>
          ) : (
            <span className="text-[var(--foreground)] text-xl font-bold">
              {formatted}원
            </span>
          )}
          <div className="flex items-center gap-2.5 text-lg text-[var(--main-color)]">
            {post?.bigCategory && (
              <span className="py-1 px-4 border border-[var(--main-color)] rounded-3xl">
                {post?.bigCategory}
              </span>
            )}
            {pathname?.startsWith('/post/free') === false &&
              (post?.category ?? []).length > 0 && (
                <span className="py-1 px-4 border border-[var(--main-color)] rounded-3xl">
                  {post?.category}
                </span>
              )}
          </div>
        </div>
      </div>
    </>
  )
}
