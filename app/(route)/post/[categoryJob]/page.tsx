import PostTitleClient from '../../_components/PostTitleClient'
import UserPostProfileCard from '../../_components/UserPostProfileCard'

export default function Page() {
  return (
    <>
      <PostTitleClient />

      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 11 }).map((_, i) => (
          <div className="w-full">
            <UserPostProfileCard key={i} />
          </div>
        ))}
      </div>
    </>
  )
}
