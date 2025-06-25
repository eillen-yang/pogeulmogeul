import Link from 'next/link'
import UserPofileCard from './UserPofileCard'

export default function UserPhotoCard() {
  return (
    <div>
      <Link href={'/:username'}>
        <div></div>
        <div>
          <div>
            <span>서울 · 내국인</span>
            <span>170cm · 58kg</span>
            <span>상 30 · 하 26 · 상 240</span>
          </div>
        </div>
        <span>모델</span>
      </Link>
      <UserPofileCard />
    </div>
  )
}
