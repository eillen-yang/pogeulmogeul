'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import AnimatedEyes from './_components/AnimatedEyes'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#F6F6FA] px-4 py-10 text-center overflow-hidden">
      <div className="z-10">
        {/* ✅ 픽셀 스타일 숫자 */}
        <h1 className="text-[80px] md:text-[100px] text-[#200080] font-pixel leading-none tracking-wider">
          404
        </h1>

        <p className="mt-4 text-gray-800 text-2xl md:text-3xl">
          요청하신 페이지를 찾을 수 없습니다{' '}
          <span className="inline-block">😢</span>
        </p>
        <p className="mt-1 text-xl text-gray-600">
          존재하지 않는 주소를 입력하셨거나, 요청하신 페이지의 주소가
          변경 또는 삭제되어 찾을 수 없습니다.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#200080] px-6 py-3 text-white text-2xl font-semibold hover:bg-[#3c2d9d] transition"
        >
          홈으로
        </Link>
      </div>

      {/* ✅ 애니메이션 눈 */}
      <AnimatedEyes />
    </main>
  )
}
