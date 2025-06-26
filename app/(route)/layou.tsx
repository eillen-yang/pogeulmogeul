import React from 'react'
import Sidebar from '../_components/Sidebar'
import MainContent from './_components/MainContent'

export default function Layout() {
  return (
    <div className="mt-[7.5rem] min-h-[calc(100dvh-7.5rem)] bg-amber-100">
      <div className="container mx-auto px-3">
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
