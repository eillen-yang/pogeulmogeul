import React, { ReactNode } from 'react'
import Sidebar from '../_components/Sidebar'
import Header from '../_components/Header'
import '../globals.css'

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        <div className="mt-[7.5rem] min-h-[calc(100dvh-7.5rem)] pb-20 bg-white">
          <div className="relative max-w-[1024px] w-full lg:px-0 px-5 mx-auto">
            <div className="flex md:flex-row flex-col">
              <Sidebar />
              <section className="flex-1">
                <div className="md:pl-80 min-h-dvh">{children}</div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
