import type { Metadata } from 'next'
import './globals.css'
import AuthSession from './_components/AuthSession'
import ReactQueryProvider from './_providers/ReactQueryProvider'
import AuthInitializer from './_components/AuthProvider'

export const metadata: Metadata = {
  title: {
    default: '포글모글',
    template: '%s | 포글모글',
  },
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
        <ReactQueryProvider>
          <AuthInitializer>
            {/* <AuthSession> */}
            {children}
            {/* </AuthSession> */}
          </AuthInitializer>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
