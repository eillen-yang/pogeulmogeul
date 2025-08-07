import PostTitleClient from '../../_components/PostTitleClient'
import UserPostProfileCard from '../../_components/UserPostProfileCard'

export default function Page() {
  return (
    <>
      <PostTitleClient />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <UserPostProfileCard />
      </div>
    </>
  )
}
