'use client'

import { Button } from '@/app/_components/ui/Button'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full min-h-fit py-40 bg-[var(--main-color)] text-6xl text-white font-bold rounded-3xl">
      <p>캘린더 조금만 기다려 ~~</p>
      <Button
        onClick={() => router.back()}
        variant="ghost"
      >
        이전으로
      </Button>
    </div>
  )
}
