import { Title } from '@/app/_components/Title'
import UserPostProfileCard from './UserPostProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import UserPhotoCard from './UserPhotoCard'

export default function MainContent() {
  return (
    <div className="flex flex-col gap-14 pl-10">
      {/* 구해요 섹션 */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1">
          <Title
            prefix="모델 구해요! "
            highlight="사진작가가 "
            href="/post/:categoryJob"
          />
          <UserPostProfileCard />
        </div>
        <div className="flex-1">
          <Title
            prefix="사진작가 구해요!"
            highlight="모델이 "
            href="/post/:categoryJob"
          />
          <UserPostProfileCard />
        </div>
      </div>

      {/* 추천 PICK! */}
      <div>
        <Title
          prefix="PICK!"
          highlight="포글모글 추천 "
        />
        <div className="flex flex-row gap-4 flex-wrap">
          <UserPhotoCard />
          <UserPhotoCard />
          <UserPhotoCard />
          <UserPhotoCard />
          <UserPhotoCard />
          <UserPhotoCard />
          <UserPhotoCard />
        </div>
      </div>
    </div>
  )
}
