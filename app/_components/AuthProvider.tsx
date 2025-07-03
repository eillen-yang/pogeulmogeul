'use client'

import React, { ReactNode, useEffect } from 'react'
import { useAuthStore } from '../stores/authStore'

type Props = { children: ReactNode }

export default function AuthInitializer({ children }: Props) {
  const initialize = useAuthStore((state) => state.initialize)

  useEffect(() => {
    initialize()
  }, [initialize])

  return <>{children}</>
}
