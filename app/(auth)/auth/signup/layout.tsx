import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Page({ children }: Props) {
  return <div className="min-w-[415px] text-2xl">{children}</div>
}
