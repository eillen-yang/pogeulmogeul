'use client'

import React, { useEffect } from 'react'
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'next/navigation'

type Props = { children: React.ReactNode }

export default function ProtectedRoute({ children }: Props) {
  const { token, isInitialized, initialize } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    initialize()
  }, [initialize])

  useEffect(() => {
    if (isInitialized && !token) {
      const currentPath = window.location.pathname
      localStorage.setItem('redirectAfterLogin', currentPath)
      router.replace('/auth/login')
    }
  }, [token, isInitialized, router])

  if (!isInitialized) return null // 로딩 스피너 추가

  return <>{children}</>
}
