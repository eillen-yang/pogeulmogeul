import React, { ReactNode } from 'react'
import Sidebar from '../_components/Sidebar'
import MainContent from './_components/MainContent'
import Header from '../_components/Header'

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        <div className="mt-[7.5rem] min-h-[calc(100dvh-7.5rem)] pb-20 bg-white">
          <div className="relative container mx-auto">
            <div className="flex flex-row">
              <Sidebar />
              <section className="flex-1">
                <div className="pl-80 min-h-dvh">
                  <MainContent children={children} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
