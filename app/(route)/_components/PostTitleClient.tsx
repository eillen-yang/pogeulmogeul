'use client'

import { Title } from '@/app/_components/Title'
import { TITLE_MAP, TitleKey } from '@/app/_constants/titleMap'
import { usePathname } from 'next/navigation'

export default function PostTitleClient() {
  const pathname = usePathname()

  const matchedKey = (Object.keys(TITLE_MAP) as TitleKey[]).find(
    (key) => pathname.includes(key),
  )

  const titleData = matchedKey ? TITLE_MAP[matchedKey] : null

  if (!titleData) return null
  return (
    <Title
      prefix={titleData.prefix}
      highlight={titleData.highlight}
      suffix={titleData.suffix}
    />
  )
}
