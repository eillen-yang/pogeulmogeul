import UserPofileCard from './UserPofileCard'
import UserPostCard from './UserPostCard'

type Props = { url: string }
export default function UserPostProfileCard({ url }: Props) {
  return (
    <div className="border border-[var(--color-3)] rounded-3xl">
      <UserPostCard url={url} />
      <hr className="mx-auto w-11/12 text-center text-[var(--color-3)]" />
      <UserPofileCard />
    </div>
  )
}
