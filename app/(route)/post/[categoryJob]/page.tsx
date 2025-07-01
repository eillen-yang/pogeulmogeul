import PostTitleClient from '../../_components/PostTitleClient'
import UserPostProfileCard from '../../_components/UserPostProfileCard'

type Props = { url: string }

export default function Page({ url }: Props) {
  return (
    <>
      <PostTitleClient />

      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            className="w-full"
            key={i}
          >
            <UserPostProfileCard url={url} />
          </div>
        ))}
      </div>
    </>
  )
}
