'use client'

import { Title } from '@/app/_components/Title'
import UserPostProfileCard from './UserPostProfileCard'
import UserPhotoCard from './UserPhotoCard'
import { postService } from '@/app/api/services/postService'
import { useEffect, useState } from 'react'
import { useFavorites } from '@/app/hooks/useFavorites'
import { useAuthStore } from '@/app/stores/authStore'
import { toast } from 'react-hot-toast'
import { PickUser } from '@/app/types/User'

export default function MainContent() {
  const [pickUsers, setPickUsers] = useState<PickUser[]>([])
  const [favoriteMap, setFavoriteMap] = useState<
    Record<number, boolean>
  >({})
  const { token } = useAuthStore()
  const { addFavorite, removeFavorite } = useFavorites()

  const toggleFavorite = (uid: number, name: string) => {
    const isFav = favoriteMap[uid] ?? false

    if (!token) {
      toast.error('로그인이 필요합니다.')
      return
    }

    if (isFav) {
      removeFavorite(name)
    } else {
      addFavorite(name)
    }

    setFavoriteMap((prev) => ({
      ...prev,
      [uid]: !isFav,
    }))
  }

  useEffect(() => {
    const fetchPickUsers = async () => {
      try {
        const data = await postService.getPickPosts()
        setPickUsers(data)
        console.log('pickUsers', data)
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
              isFavorite={favoriteMap[user.uid] ?? false}
              onFavoriteToggle={() =>
                toggleFavorite(user.uid, user.name)
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
