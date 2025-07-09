'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { TabType } from '@/app/types/Tabs'
import { useUserInfo } from '@/app/hooks/useUserInfo'
import { useAuthStore } from '@/app/stores/authStore'
import { TabMenu } from './TabMenu'
import MyImages from './MyImages'
import MylikeContent from './MylikeContent'
import MyPostContent from './MyPostContent'
import { mapUserTypeToLabel } from '@/app/utils/mapUserTypeToLabel'
import { UserType } from '@/app/types/Auth'
import DetailProfileCard from './DetailProfileCard'

const TABS: TabType[] = ['내 작성글', '등록 이미지', '좋아요']

export default function MyClientComponent() {
  const router = useRouter()
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState<TabType>(TABS[0])

  const email = user?.email ?? ''
  const userType = mapUserTypeToLabel(
    (user?.userRank ?? '일반회원') as UserType,
  )

  console.log('user auth', user)

  const { data: userInfo, isLoading } = useUserInfo(email, userType)

  useEffect(() => {
    if (!user) {
      router.replace('/auth/login')
      return
    }
  }, [user])

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
          onTabChange={(tab) => setActiveTab(tab)}
        />
        {activeTab === '내 작성글' && <MyPostContent />}
        {activeTab === '등록 이미지' && <MyImages />}
        {activeTab === '좋아요' && <MylikeContent />}
      </div>
    </div>
  )
}
