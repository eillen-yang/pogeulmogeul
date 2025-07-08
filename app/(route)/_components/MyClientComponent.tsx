'use client'

import { TabType } from '@/app/types/Tabs'
import PostProfile from './PostProfile'
import { TabMenu } from './TabMenu'
import { useState } from 'react'
import MyImages from './MyImages'
import { useAuthStore } from '@/app/stores/authStore'
import { useRouter } from 'next/navigation'
import MylikeContent from './MylikeContent'
import MyPostContent from './MyPostContent'

const TABS: TabType[] = ['내 작성글', '등록 이미지', '좋아요']
export default function MyClientComponent() {
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
          onTabChange={(tab) => setActiveTab(tab)}
        />
        {activeTab === '내 작성글' && <MyPostContent />}
        {activeTab === '등록 이미지' && <MyImages />}
        {activeTab === '좋아요' && <MylikeContent />}
      </div>
    </div>
  )
}
