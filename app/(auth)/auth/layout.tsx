import Header from '@/app/_components/Header'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center w-full py-20 mt-[7.5rem] min-h-[calc(100dvh-7.5rem)] bg-white">
        <div className="">{children}</div>
      </main>
    </>
  )
}
