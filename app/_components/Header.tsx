'use client'

import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '@/public/logo_white.svg'
import Logo from '@/public/logo.svg'
import CalenderWhite from '@/public/white_canlendar.svg'
import Calender from '@/public/black_canlendar.svg'
import TalkWhite from '@/public/white_talk.svg'
import Talk from '@/public/black_talk.svg'
import Menu from '@/public/menu.svg'
import MenuHover from '@/public/menu_hover.svg'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
        'fixed flex items-center w-full h-[7.5rem]',
        isColors ? 'bg-[var(--main-color)]' : 'bg-white',
      )}
    >
      <div className="container m-0 mx-auto">
        <div className="flex justify-between items-center">
          <h1>
            <Link
              href={'/'}
              className="block w-[10rem]"
            >
              <Image
                src={isColors ? LogoWhite : Logo}
                alt="logo"
              />
            </Link>
          </h1>
          <div className="flex items-center gap-5 text-white">
            <Link href={'/:username/canlendar'}>
              <Image
                src={isColors ? CalenderWhite : Calender}
                alt="calender icon"
              />
            </Link>
            <Link href={'/:username/chatting'}>
              <Image
                src={isColors ? TalkWhite : Talk}
                alt="Talk icon"
              />
            </Link>
            {/* 로그인 안했을 경우 */}
            <div className="flex gap-5 font-semibold text-xl">
              <Link
                href={'/auth/login'}
                className="block py-2 px-7 text-white rounded-3xl border border-white bg-[var(--main-color)] hover:bg-[var(--main-hover-color)]"
              >
                로그인
              </Link>
              <Link
                href={'/auth/signup'}
                className="block py-2 px-7 text-[var(--main-color)] bg-white hover:bg-[var(--main-color)] hover:text-white rounded-3xl border border-[var(--main-color)]"
              >
                회원가입
              </Link>
            </div>
            <div
              className="relative"
              ref={dropdownRef}
            >
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="transition-transform duration-200 hover:scale-105"
              >
                <Image
                  className="w-20"
                  src={isOpen ? MenuHover : Menu}
                  alt="menu"
                />
              </button>
              {/* 로그인 했을 경우 */}
              {isOpen && (
                <ul className="absolute right-0 mt-3 flex flex-col gap-3 px-7 py-5 w-40 bg-white text-[var(--color-10)] text-xl font-semibold shadow-lg rounded-lg z-50">
                  <li className="hover:underline">
                    <Link href={':username/mypage'}>마이페이지</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href={':username/calender'}>캘린더</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href={':username/chatting'}>채팅</Link>
                  </li>
                  <li className="hover:underline">
                    <Link href={':username/heart-list'}>
                      관심목록
                    </Link>
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
