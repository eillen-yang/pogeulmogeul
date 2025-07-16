'use client'

import React, { ReactNode, useEffect } from 'react'
import { useAuthStore } from '../stores/authStore'

type Props = { children: ReactNode }

export default function AuthInitializer({ children }: Props) {
  const { isInitialized, initialize } = useAuthStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  if (!isInitialized) return null // 로딩스피너 추가

  return <>{children}</>
}
