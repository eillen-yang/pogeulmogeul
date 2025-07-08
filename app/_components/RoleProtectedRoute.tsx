'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthStore } from '@/app/stores/authStore'
import { UserType } from '@/app/types/Auth'

interface Props {
  allowedRoles: UserType[]
  children: React.ReactNode
}

// 일반, 사진작가, 모델 역할분류 기반 보호 라우트
export default function RoleProtectedRoute({
  allowedRoles,
  children,
}: Props) {
  const { user } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!user || !allowedRoles.includes(user.role)) {
      router.replace('/')
    }
  }, [user, allowedRoles, router])

  if (!user || !allowedRoles.includes(user.role)) return null

  return <>{children}</>
}
