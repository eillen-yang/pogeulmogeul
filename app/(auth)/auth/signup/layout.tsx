import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Page({ children }: Props) {
  return (
    <div className="min-w-[390px] text-2xl md:px-0 px-5">
      {children}
    </div>
  )
}
