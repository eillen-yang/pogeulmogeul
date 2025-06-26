import type { Metadata } from 'next'
import './globals.css'
import AuthSession from './_components/AuthSession'

export const metadata: Metadata = {
  title: '포글모글',
  description:
    '모델과 사진기사를 쉽고 빠르게 연결해주는 온라인 중개 플랫폼',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-pretendard bg-white">
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  )
}
