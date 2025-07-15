'use client'

import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '@/public/logo/logo_white.svg'
import Logo from '@/public/logo/logo.svg'
import CalenderWhite from '@/public/icon/white_canlendar.svg'
import Calender from '@/public/icon/black_canlendar.svg'
import TalkWhite from '@/public/icon/white_talk.svg'
import Talk from '@/public/icon/black_talk.svg'
import Menu from '@/public/dummy.svg'
import MenuHover from '@/public/dummy_hover.svg'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { useAuthStore } from '../stores/authStore'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { user, logout } = useAuthStore()

  useEffect(() => {
    function handleClickOutSide(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutSide)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  }, [])

  const isColors = pathname.startsWith('/auth')

  return (
    <header
      className={clsx(
        'fixed top-0 flex items-center w-full h-[7.5rem] z-50',
        isColors ? 'bg-[var(--main-color)]' : 'bg-white',
      )}
    >
      <div className="w-full max-w-[1024px] mx-auto">
        <div className="flex justify-between items-center">
          <h1>
            <Link
              href={'/'}
              className="block w-[10rem]"
            >
              <Image
                src={isColors ? LogoWhite : Logo}
                alt="logo"
                priority
              />
            </Link>
          </h1>
          <div className="flex items-center gap-5 text-white">
            <Link href={'/:username/canlendar'}>
              <Image
                width={16}
                src={isColors ? CalenderWhite : Calender}
                alt="calender icon"
              />
            </Link>
            {/* <Link href={'/:username/chatting'}>
              <Image
                src={isColors ? TalkWhite : Talk}
                alt="Talk icon"
              />
            </Link> */}
            {/* 로그인 안했을 경우 */}
            <div className="flex items-center gap-2 font-semibold text-xl">
              {user ? (
                <>
                  <span className="text-[var(--main-color)] font-bold text-2xl">
                    {user.name}님!
                  </span>
                  <button
                    onClick={logout}
                    className="block py-2 px-7 text-white rounded-3xl border border-white bg-[var(--main-color)] hover:bg-[var(--main-hover-color)]"
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={'/auth/social'}
                    className="block py-2 px-7 text-white rounded-3xl border border-white bg-[var(--main-color)] hover:bg-[var(--main-hover-color)]"
                  >
                    로그인
                  </Link>
                  <Link
                    href={'/auth/signup/step01'}
                    className="block py-2 px-7 text-[var(--main-color)] bg-white hover:bg-[var(--main-color)] hover:text-white rounded-3xl border border-[var(--main-color)] hover:border hover:border-white"
                  >
                    회원가입
                  </Link>
                </>
              )}
            </div>
            <div
              className="relative"
              ref={dropdownRef}
            >
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="transition-transform duration-200 hover:scale-105"
              >
                {user && (
                  <Image
                    className="w-20"
                    src={isOpen ? MenuHover : Menu}
                    alt="menu"
                  />
                )}
              </button>

              {isOpen && (
                <ul className="absolute right-0 mt-3 flex flex-col gap-3 px-7 py-5 w-40 bg-white text-[var(--color-10)] text-xl font-semibold shadow-lg rounded-lg z-50">
                  <li className="hover:underline">
                    <Link href={'/me'}>마이페이지</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href={'/calender'}>캘린더</Link>
                  </li>
                  {/* <li className="hover:underline">
                    <Link href={'/chatting'}>채팅</Link>
                  </li> */}
                  <li className="hover:underline">
                    <Link href={'/heart-list'}>관심목록</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
