'use client'

import { TabType } from '@/app/types/Tabs'
import { TabMenu } from './TabMenu'
import { useState } from 'react'
import UserImages from './UserImages'
import UserPostContent from './UserPostContent'
import { useAuthStore } from '@/app/stores/authStore'
import { useRouter } from 'next/navigation'
import { mapUserTypeToLabel } from '@/app/utils/mapUserTypeToLabel'
import { UserType } from '@/app/types/Auth'
import { useUserInfo } from '@/app/hooks/useUserInfo'
import DetailProfileCard from './DetailProfileCard'

const TABS: TabType[] = ['작성글', '상대방 이미지']
export default function UserClientComponent() {
  const router = useRouter()
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState<TabType>(TABS[0])

  const email = user?.email ?? ''
  const userType = mapUserTypeToLabel(
    (user?.userRank ?? '일반회원') as UserType,
  )

  const { data: userInfo, isLoading } = useUserInfo(email, userType)
  if (!user) {
    router.replace('/auth/login')
    return
  }

  if (!user || isLoading || !userInfo) return null

  return (
    <div className="flex gap-4 pb-64">
      <div className="flex-1">
        <DetailProfileCard user={userInfo} />
      </div>

      <div className="flex-1/4 h-full">
        <TabMenu
          tabs={TABS}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          userName="대상혁"
        />
        {activeTab === '작성글' && <UserPostContent />}
        {activeTab === '상대방 이미지' && <UserImages />}
      </div>
    </div>
  )
}
