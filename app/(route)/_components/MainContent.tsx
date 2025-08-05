'use client'

import { Title } from '@/app/_components/Title'
import UserPostProfileCard from './UserPostProfileCard'
import UserPhotoCard from './UserPhotoCard'
import { postService } from '@/app/api/services/postService'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { PickUser } from '@/app/types/User'
import { useFavoriteToggle } from '@/app/hooks/useFavoriteToggle'

export default function MainContent() {
  const [pickUsers, setPickUsers] = useState<PickUser[]>([])
  const { favoriteMap, toggleFavorite } = useFavoriteToggle()

  useEffect(() => {
    const fetchPickUsers = async () => {
      try {
        const data = await postService.getPickPosts()
        setPickUsers(data)
      } catch (err) {
        console.error('추천 pink 게시글 로딩 실패', err)
      }
    }
    fetchPickUsers()
  }, [])

  return (
    <div className="flex flex-col gap-14">
      {/* 구해요 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex-1">
          <Title
            prefix="모델 구해요! "
            highlight="사진작가가 "
            href="/post/model_wantit"
          />
          <UserPostProfileCard url="/post/model_wantit" />
        </div>
        <div className="flex-1">
          <Title
            prefix="사진작가 구해요!"
            highlight="모델이 "
            href="/post/photographer_wantit"
          />
          <UserPostProfileCard url={'/post/photographer_wantit'} />
        </div>
      </div>

      {/* 추천 PICK! */}
      <div>
        <Title
          prefix="PICK!"
          highlight="포글모글 추천 "
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pickUsers.map((user) => (
            <UserPhotoCard
              user={user}
              key={user.uid}
              isFavorite={favoriteMap[user.name] ?? false}
              onFavoriteToggle={() => toggleFavorite(user.name)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
