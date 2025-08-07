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
  const isDetailPage = /\d+$/.test(pathname)
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
    <>
      <aside className="md:fixed md:block hidden w-64 z-50">
        <ul className="text-2xl">
          {/* 포글모글 추천 */}
          <li
            className={clsx(
              'py-4 px-5 w-full rounded-4xl hover:font-bold',
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
                'block w-full text-left py-1 hover:font-bold',
                openMenu === 'model' && 'font-bold',
              )}
              onClick={() => toggleMenu('model')}
            >
              <span>💎 모델</span>
            </button>
            {openMenu === 'model' && (
              <ul>
                <li
                  className={clsx(
                    'py-4 px-5 w-full rounded-4xl hover:font-bold',
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
                    'py-4 px-5 w-full rounded-4xl hover:font-bold',
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
                'block w-full text-left py-1 hover:font-bold',
                openMenu === 'photo' && 'font-bold',
              )}
              onClick={() => toggleMenu('photo')}
            >
              <span>📸 사진 촬영</span>
            </button>
            {openMenu === 'photo' && (
              <ul>
                <li
                  className={clsx(
                    'py-4 px-5 w-full rounded-4xl hover:font-bold',
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
                    'py-4 px-5 w-full rounded-4xl hover:font-bold',
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
              'py-4 px-5 w-full hover:bg-gray-100 rounded-4xl hover:font-bold',
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
              'py-4 px-5 w-full hover:bg-gray-100 rounded-4xl hover:font-bold',
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

        {isPost && !isEdit && !isDetailPage && (
          <Link
            href={`${pathname}/edit`}
            className="md:block hidden mt-5 w-full p-5 border border-[var(--main-color)] text-center rounded-4xl text-2xl text-[var(--main-color)] hover:underline hover:bg-[var(--main-color)] hover:text-white"
          >
            게시글 작성
          </Link>
        )}
      </aside>

      {/* 태블릿 이하 */}
      <div className="relative">
        <nav
          className={clsx(
            'flex md:hidden w-full sm:justify-center overflow-x-auto whitespace-nowrap hide-scrollbar justify-start space-x-4 text-xl sm:text-2xl pb-7',
            (openMenu === 'model' || openMenu === 'photo') && 'pb-14',
          )}
        >
          <Link
            href="/"
            className={clsx(
              'px-4 py-2 rounded-3xl hover:bg-gray-100',
              pathname === '/' && activeStyle,
            )}
          >
            ❤️ 포글모글 추천
          </Link>

          {/* 모델 드롭다운 */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('model')}
              className={clsx(
                'px-4 py-2 rounded-3xl hover:bg-gray-100',
                openMenu === 'model' && 'font-bold',
              )}
            >
              💎 모델
            </button>
            {openMenu === 'model' && (
              <ul className="absolute flex gap-4 bg-white mt-2 shadow-lg rounded-xl text-lg w-max">
                <li
                  className={clsx(
                    'px-4 py-2 hover:bg-gray-100',
                    pathname === '/post/model_wantit' && activeStyle,
                  )}
                >
                  <Link href="/post/model_wantit">모델 필요해</Link>
                </li>
                <li
                  className={clsx(
                    'px-4 py-2 hover:bg-gray-100',
                    pathname === '/post/model_doit' && activeStyle,
                  )}
                >
                  <Link href="/post/model_doit">모델 해줄게</Link>
                </li>
              </ul>
            )}
          </div>

          {/* 사진 촬영 드롭다운 */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('photo')}
              className={clsx(
                'px-4 py-2 rounded-3xl hover:bg-gray-100',
                openMenu === 'photo' && 'font-bold',
              )}
            >
              📸 사진 촬영
            </button>
            {openMenu === 'photo' && (
              <ul className="absolute flex gap-4 bg-white mt-2 shadow-lg rounded-xl text-lg w-max">
                <li
                  className={clsx(
                    'px-4 py-2 hover:bg-gray-100',
                    pathname === '/post/photographer_wantit' &&
                      activeStyle,
                  )}
                >
                  <Link href="/post/photographer_wantit">
                    사진작가 필요해
                  </Link>
                </li>
                <li
                  className={clsx(
                    'px-4 py-2 hover:bg-gray-100',
                    pathname === '/post/photographer_doit' &&
                      activeStyle,
                  )}
                >
                  <Link href="/post/photographer_doit">
                    사진작가 해줄게
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            href="/post/photoshop"
            className={clsx(
              'px-4 py-2 rounded-3xl hover:bg-gray-100',
              pathname === '/post/photoshop' && activeStyle,
            )}
          >
            🎨 포토샵
          </Link>
          <Link
            href="/post/free"
            className={clsx(
              'px-4 py-2 rounded-3xl hover:bg-gray-100',
              pathname === '/post/free' && activeStyle,
            )}
          >
            ✨ 재능기부
          </Link>
        </nav>

        {isPost && !isEdit && !isDetailPage && (
          <Link
            href={`${pathname}/edit`}
            className="md:hidden fixed w-14 h-14 leading-14 rounded-full bottom-30 right-8 bg-[var(--main-color)] text-white text-4xl font-bold text-center z-50"
          >
            +
          </Link>
        )}
      </div>
    </>
  )
}
