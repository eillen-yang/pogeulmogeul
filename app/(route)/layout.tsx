import React, { ReactNode } from 'react'
import Sidebar from '../_components/Sidebar'
import Header from '../_components/Header'

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        <div className="mt-[7.5rem] min-h-[calc(100dvh-7.5rem)] pb-20">
          <div className="relative max-w-[1024px] w-full px-5 mx-auto">
            <div className="flex flex-row">
              <Sidebar />
              <section className="flex-1">
                <div className="pl-80 min-h-dvh">{children}</div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
