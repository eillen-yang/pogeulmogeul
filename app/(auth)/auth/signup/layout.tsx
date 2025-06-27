import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Page({ children }: Props) {
  return <>{children}</>
}
