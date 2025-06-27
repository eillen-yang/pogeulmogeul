import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center">
      <p className="mb-3 text-lg text-[var(--color-5)]">
        지금바로 포글모글의 다양한 서비스를 이용해보세요.
      </p>
      <h2 className="pb-14 text-4xl font-bold text-center">
        <span className="text-[var(--main-color)]">회원가입</span>이
        <br />
        완료되었습니다.
      </h2>
      <div className="flex flex-col items-center justify-center text-center gap-5 text-xl min-w-[420px]">
        <Link
          href={'/'}
          className="p-4 w-full bg-[var(--main-color)] text-white rounded-4xl"
        >
          메인으로 돌아가기
        </Link>
        <Link
          href={'/:username'}
          className="p-4 w-full border border-[var(--color-5)] rounded-4xl"
        >
          마이페이지 둘러보기
        </Link>
      </div>
    </div>
  )
}
