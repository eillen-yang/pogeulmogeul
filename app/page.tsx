import React, { ReactNode } from 'react'
import Layout from './(route)/layout'

type Props = {
  children: React.ReactNode
}

export default function Home({ children }: Props) {
  return <Layout children={children} />
}
