'use client'

import { TabMenuProps } from '@/app/types/Tabs'

export const TabMenu = ({
  userName = '',
  postCount = 0,
  tabs,
  activeTab,
  onTabChange,
}: TabMenuProps) => {
  return (
    <ul className="flex gap-4 pb-4 text-xl">
      {tabs.map((tab) => (
        <li
          key={tab}
          className={`cursor-pointer px-4 pb-2 transition-colors ${
            activeTab === tab
              ? 'border-b-2 border-[var(--main-color)] text-[var(--main-color)] font-semibold'
              : 'hover:text-[var(--main-color)] text-gray-600'
          } ${tab === '작성글' ? 'flex items-center gap-2' : ''}`}
          onClick={() => onTabChange!(tab)}
        >
          {tab === '작성글' ? (
            <>
              작성글
              <span className="border border-[var(--main-color)] text-[var(--main-color)] text-sm px-2 rounded-full">
                {postCount}
              </span>
            </>
          ) : tab === '상대방 이미지' ? (
            <>
              <span className="font-bold">{userName}</span>님의 이미지
            </>
          ) : (
            tab
          )}
        </li>
      ))}
    </ul>
  )
}
