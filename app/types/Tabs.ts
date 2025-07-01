export type TabType =
  | '내 프로필'
  | '등록 이미지'
  | '작성글'
  | '상대방 이미지'

export type TabMenuProps = {
  userName?: string
  postCount?: number
  tabs: TabType[]
  activeTab: TabType
  onTabChange?: (tab: TabType) => void
}
