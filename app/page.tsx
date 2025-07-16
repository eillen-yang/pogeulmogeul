import React, { ReactNode } from 'react'
import Layout from './(route)/layout'

type Props = {
  children: ReactNode
}

export default function Home({ children }: Props) {
  return <Layout children={children} />
}
