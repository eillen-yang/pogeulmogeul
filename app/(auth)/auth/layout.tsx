import Header from '@/app/_components/Header'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-dvh">
        {children}
      </div>
    </>
  )
}
