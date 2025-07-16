import React, { ReactNode } from 'react'
import Layout from './(route)/layout'
import { redirect } from 'next/navigation'

type Props = {
  children: React.ReactNode
}

export default function Home() {
  redirect('/auth/login')
}
