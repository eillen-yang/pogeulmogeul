import type { Metadata } from 'next'
import './globals.css'
import ReactQueryProvider from './_providers/ReactQueryProvider'
import AuthInitializer from './_components/AuthProvider'
import { Toaster } from 'react-hot-toast'

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
            <Toaster
              position="top-center"
              toastOptions={{
                style: { fontSize: '16px' },
                success: {
                  style: {
                    background: 'var(--main-hover-color)',
                    color: '#fff',
                    fontWeight: 'bold',
                  },
                },
              }}
            />
            {children}
            {/* </AuthSession> */}
          </AuthInitializer>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
