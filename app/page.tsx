import { ReactNode } from 'react'
import Sidebar from './_components/Sidebar'

type Props = { children: ReactNode }

export default function Home({ children }: Props) {
  return (
    <div className="mt-[7.5rem] h-[calc(100dvh-7.5rem)] bg-amber-100">
      <div className="container m-0 mx-auto">
        <div className="flex flex-row">
          <Sidebar />
          <section className="flex-1">
            gdgdgdgdㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ{children}
          </section>
        </div>
      </div>
    </div>
  )
}
