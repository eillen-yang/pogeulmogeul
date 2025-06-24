import { ReactNode } from 'react'
import Sidebar from './_components/Sidebar'

type Props = { children: ReactNode }

export default function Home({ children }: Props) {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}
