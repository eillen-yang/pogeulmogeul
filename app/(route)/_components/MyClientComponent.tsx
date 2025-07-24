'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { TabType } from '@/app/types/Tabs'
import { useUserInfo } from '@/app/hooks/useUserInfo'
import { useAuthStore } from '@/app/stores/authStore'
import { TabMenu } from './TabMenu'
import MyImages from './MyImages'
import MylikeContent from './MylikeContent'
import DetailProfileCard from './DetailProfileCard'
import { favoriteService } from '@/app/api/services/favoriteService'

const TABS: TabType[] = ['등록 이미지', '좋아요']

export default function MyClientComponent() {
  const router = useRouter()
  const { user, token } = useAuthStore()
  const [activeTab, setActiveTab] = useState<TabType>(TABS[0])
  const [favorites, setFavorites] = useState<FavoriteUsers[]>([])
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true)

  const email = user?.email ?? ''
  const { data: userInfo, isLoading } = useUserInfo(email, 'all')

  console.log('favorites', favorites)

  useEffect(() => {
    if (!token) return

    const fetchFavorites = async () => {
      try {
        const data = await favoriteService.getAllFavorites(token)
        setFavorites(data)
      } catch (error) {
        console.error('즐겨찾기 불러오기 실패ㅠ', error)
      } finally {
        setIsLoadingFavorites(false)
      }
    }

    fetchFavorites()
  }, [token])

  useEffect(() => {
    if (!user) {
      router.replace('/auth/login')
      return
    }
  }, [user])

  if (!user || isLoading || !userInfo || isLoadingFavorites)
    return null

  return (
    <div className="flex gap-4 pb-64">
      <div className="flex-1">
        <DetailProfileCard
          user={userInfo}
          email={email}
        />
      </div>

      <div className="flex-1/4 h-full">
        <TabMenu
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />
        {/* {activeTab === '내 작성글' && <MyPostContent />} */}
        {activeTab === '등록 이미지' && <MyImages />}
        {activeTab === '좋아요' && (
          <MylikeContent favorites={favorites} />
        )}
      </div>
    </div>
  )
}
