'use client'

import React, { useEffect, useRef } from 'react'

export default function AnimatedEyes() {
  const eye1Ref = useRef<HTMLDivElement>(null)
  const eye2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateEyes = (e: MouseEvent) => {
      const eyes = [eye1Ref.current, eye2Ref.current]
      eyes.forEach((eye) => {
        if (!eye) return
        const { left, top, width, height } =
          eye.getBoundingClientRect()
        const centerX = left + width / 2
        const centerY = top + height / 2
        const deltaX = e.clientX - centerX
        const deltaY = e.clientY - centerY
        const angle = Math.atan2(deltaY, deltaX)
        const radius = 6
        const pupil = eye.querySelector('.pupil') as HTMLDivElement
        if (pupil) {
          pupil.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`
        }
      })
    }

    window.addEventListener('mousemove', updateEyes)
    return () => window.removeEventListener('mousemove', updateEyes)
  }, [])

  return (
    <div className="absolute top-10 right-1/2 py-6 px-4 rounded-3xl bg-[#200080] flex gap-4 z-10">
      <Eye ref={eye1Ref} />
      <Eye ref={eye2Ref} />
    </div>
  )
}

const Eye = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-[6px] border-[#200080]"
  >
    <div className="pupil w-5 h-5 bg-[#200080] rounded-full transition-all duration-100" />
  </div>
))
Eye.displayName = 'Eye'
