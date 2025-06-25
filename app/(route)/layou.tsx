import React from 'react'
import Sidebar from '../_components/Sidebar'
import MainContent from './_components/MainContent'

export default function Layout() {
  return (
    <div className="mt-[7.5rem] h-[calc(100dvh-7.5rem)] bg-amber-100">
      <div className="container m-0 mx-auto">
        <div className="flex flex-row">
          <Sidebar />
          <section className="flex-1">
            <MainContent />
          </section>
        </div>
      </div>
    </div>
  )
}
