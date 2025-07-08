'use client'

import { TabType } from '@/app/types/Tabs'
import PostProfile from './PostProfile'
import { TabMenu } from './TabMenu'
import { useState } from 'react'
import UserImages from './UserImages'
import UserPostContent from './UserPostContent'
import { useAuthStore } from '@/app/stores/authStore'
import { useRouter } from 'next/navigation'

const TABS: TabType[] = ['작성글', '상대방 이미지']
export default function UserClientComponent() {
  const router = useRouter()
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState<TabType>(TABS[0])

  if (!user) {
    router.replace('/auth/login')
    return
  }

  return (
    <div className="flex gap-4 pb-64">
      <div className="flex-1">
        <PostProfile />
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
