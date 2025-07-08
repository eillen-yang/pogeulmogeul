import UserPostCard from './UserPostCard'

export default function MyPostContent() {
  return (
    <ul className="flex flex-col gap-5">
      <li className="border border-[var(--color-2)] rounded-2xl">
        <UserPostCard />
      </li>
      <li className="border border-[var(--color-2)] rounded-2xl">
        <UserPostCard />
      </li>
      <li className="border border-[var(--color-2)] rounded-2xl">
        <UserPostCard />
      </li>
    </ul>
  )
}
