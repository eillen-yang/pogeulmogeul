import React from 'react'
import MainContent from './(route)/_components/MainContent'
import Header from './_components/Header'
import Sidebar from './_components/Sidebar'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="mt-[7.5rem] min-h-[calc(100dvh-7.5rem)] pb-20 bg-white">
          <div className="relative max-w-[1024px] mx-auto lg:px-0 px-5">
            <div className="flex md:flex-row flex-col">
              <Sidebar />
              <section className="flex-1">
                <div className="md:pl-80 min-h-dvh">
                  <MainContent />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
