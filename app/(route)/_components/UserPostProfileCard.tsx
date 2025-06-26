import UserPofileCard from './UserPofileCard'
import UserPostCard from './UserPostCard'

export default function UserPostProfileCard() {
  return (
    <div className="border border-[var(--color-3)] rounded-3xl">
      <UserPostCard />
      <hr className="mx-auto w-11/12 text-center text-[var(--color-3)]" />
      <UserPofileCard />
    </div>
  )
}
