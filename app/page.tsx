import { ReactNode } from 'react'
import Layout from './(route)/layou'

type Props = { children: ReactNode }

export default function Home({ children }: Props) {
  return <Layout children={children} />
}
