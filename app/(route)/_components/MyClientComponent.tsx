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
import { useFavoriteToggle } from '@/app/hooks/useFavoriteToggle'

const TABS: TabType[] = ['등록 이미지', '좋아요']

export default function MyClientComponent() {
  const router = useRouter()
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState<TabType>(TABS[0])
  const { favorites, favoriteMap, toggleFavorite } =
    useFavoriteToggle()

  const email = user?.email ?? ''
  const { data: userInfo, isLoading } = useUserInfo(email, 'all')

  useEffect(() => {
    if (!user) {
      router.replace('/auth/login')
      return
    }
  }, [user])

  if (!user || isLoading || !userInfo) return null

  return (
    <div className="flex gap-4 md:flex-row flex-col pb-64">
      <div className="flex-1">
        <DetailProfileCard
          user={userInfo.requestBody}
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
          <MylikeContent
            favorites={favorites}
            favoriteMap={favoriteMap}
            onFavoriteToggle={toggleFavorite}
          />
        )}
      </div>
    </div>
  )
}
