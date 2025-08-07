'use client'

import { TabType } from '@/app/types/Tabs'
import { TabMenu } from './TabMenu'
import { useState } from 'react'
import UserImages from './UserImages'
import UserPostContent from './UserPostContent'
import { useAuthStore } from '@/app/stores/authStore'
import { useParams, useRouter } from 'next/navigation'
import DetailProfileCard from './DetailProfileCard'
import { useFavoriteToggle } from '@/app/hooks/useFavoriteToggle'
import { usePickUsers } from '@/app/hooks/usePicks'
import { PickInfo } from '@/app/types/UserInfo'

const TABS: TabType[] = ['작성글', '상대방 이미지']
export default function UserClientComponent() {
  const router = useRouter()
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState<TabType>(TABS[0])

  const params = useParams()
  const usernameParam = params?.username
  const targetId =
    typeof usernameParam === 'string'
      ? parseInt(usernameParam, 10)
      : NaN
  const { data: pickUser, isLoading } = usePickUsers()

  const { favoriteMap, toggleFavorite } = useFavoriteToggle()

  if (!user) {
    router.replace('/auth/login')
    return
  }

  if (isLoading || !pickUser || isNaN(targetId)) return null

  const userInfo = pickUser.find((u: PickInfo) => u.uid === targetId)

  if (!userInfo) {
    return <div>해당 유저를 찾을 수 없습니다.</div>
  }

  return (
    <div className="flex gap-4 md:flex-row flex-col pb-64">
      <div className="flex-1">
        <DetailProfileCard
          user={userInfo}
          isFavorite={favoriteMap[userInfo.name] ?? false}
          onFavoriteToggle={() => toggleFavorite(userInfo.name)}
        />
      </div>

      <div className="flex-1/4 h-full">
        <TabMenu
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          userName={userInfo.name}
        />
        {activeTab === '작성글' && <UserPostContent />}
        {activeTab === '상대방 이미지' && <UserImages />}
      </div>
    </div>
  )
}
