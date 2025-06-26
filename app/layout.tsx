import type { Metadata } from 'next'
import './globals.css'
import ReactQueryProvider from './_providers/ReactQueryProvider'
import Header from './_components/Header'

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
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
