'use client'

import { TabType } from '@/app/types/Tabs'
import PostProfile from './PostProfile'
import { TabMenu } from './TabMenu'
import { useState } from 'react'
import UserImages from './UserImages'
import UserProfileContent from './UserProfileContent'

const TABS: TabType[] = ['작성글', '상대방 이미지']
export default function UserClientComponent() {
  const [activeTab, setActiveTab] = useState<TabType>(TABS[0])

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
        {activeTab === '작성글' && (
          <ul className="flex flex-col gap-5">
            <UserProfileContent />
          </ul>
        )}
        {activeTab === '상대방 이미지' && <UserImages />}
      </div>
    </div>
  )
}
