'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

export default function Sidebar() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const activeStyle = 'bg-purple-100 font-semibold rounded-4xl'

  const isPost = pathname.includes('post')
  const isEdit = pathname.includes('edit')
  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu))
  }

  // 현재 경로에 따라 자동으로 아코디언 열기
  useEffect(() => {
    if (pathname.includes('/post/model')) {
      setOpenMenu('model')
    } else if (pathname.includes('/post/photographer')) {
      setOpenMenu('photo')
    } else {
      setOpenMenu(null)
    }
  }, [pathname])

  return (
    <aside className="fixed w-64 z-50">
      <nav>
        <ul className="text-2xl">
          {/* 포글모글 추천 */}
          <li
            className={clsx(
              'py-4 px-5 w-full rounded-4xl',
              pathname === '/' && activeStyle,
            )}
          >
            <Link
              href="/"
              className="block"
            >
              <span>❤️ 포글모글 추천</span>
            </Link>
          </li>

          {/* 모델 */}
          <li className="py-4 px-5 w-full bg-white hover:bg-gray-100 rounded-4xl">
            <button
              className={clsx(
                'block w-full text-left',
                openMenu === 'model' && activeStyle,
              )}
              onClick={() => toggleMenu('model')}
            >
              <span>💎 모델</span>
            </button>
            {openMenu === 'model' && (
              <ul>
                <li
                  className={clsx(
                    'py-4 px-5 w-full rounded-4xl',
                    pathname === '/post/model_wantit' && activeStyle,
                  )}
                >
                  <Link
                    href="/post/model_wantit"
                    className="block"
                  >
                    <span>모델 필요해</span>
                  </Link>
                </li>
                <li
                  className={clsx(
                    'py-4 px-5 w-full rounded-4xl',
                    pathname === '/post/model_doit' && activeStyle,
                  )}
                >
                  <Link
                    href="/post/model_doit"
                    className="block"
                  >
                    <span>모델 해줄게</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* 사진 촬영 */}
          <li className="py-4 px-5 w-full bg-white hover:bg-gray-100 rounded-4xl">
            <button
              className={clsx(
                'block w-full text-left',
                openMenu === 'photo' && activeStyle,
              )}
              onClick={() => toggleMenu('photo')}
            >
              <span>📸 사진 촬영</span>
            </button>
            {openMenu === 'photo' && (
              <ul>
                <li
                  className={clsx(
                    'py-4 px-5 w-full rounded-4xl',
                    pathname === '/post/photographer_wantit' &&
                      activeStyle,
                  )}
                >
                  <Link
                    href="/post/photographer_wantit"
                    className="block"
                  >
                    <span>사진작가 필요해</span>
                  </Link>
                </li>
                <li
                  className={clsx(
                    'py-4 px-5 w-full rounded-4xl',
                    pathname === '/post/photographer_doit' &&
                      activeStyle,
                  )}
                >
                  <Link
                    href="/post/photographer_doit"
                    className="block"
                  >
                    <span>사진작가 해줄게</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* 포토샵 */}
          <li
            className={clsx(
              'py-4 px-5 w-full bg-white hover:bg-gray-100 rounded-4xl',
              pathname === '/post/photoshop' && activeStyle,
            )}
          >
            <Link
              href="/post/photoshop"
              className="block"
            >
              <span>🎨 포토샵</span>
            </Link>
          </li>

          {/* 재능기부 */}
          <li
            className={clsx(
              'py-4 px-5 w-full bg-white hover:bg-gray-100 rounded-4xl',
              pathname === '/post/free' && activeStyle,
            )}
          >
            <Link
              href="/post/free"
              className="block"
            >
              <span>✨ 재능기부</span>
            </Link>
          </li>
        </ul>
      </nav>

      {isPost && !isEdit && (
        <Link
          href={`${pathname}/edit`}
          className="block mt-5 w-full px-4 py-6 border border-[var(--main-color)] text-center rounded-4xl text-2xl text-[var(--main-color)] hover:underline hover:bg-[var(--main-color)] hover:text-white"
        >
          게시글 작성
        </Link>
      )}
    </aside>
  )
}
