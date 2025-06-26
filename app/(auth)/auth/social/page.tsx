import Image from 'next/image'
import kakaoIcon from '@/public/social/kakao_icon.svg'
import googleIcon from '@/public/social/google_icon.svg'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="text-center">
      <h1 className="pb-6 text-4xl font-bold">
        어떤 방법으로 로그인 할까요?
      </h1>
      <p className="text-lg text-[var(--color-5)]">
        포글모글에서는 여러분을 위한 다양한 로그인 방식을 제공합니다.
      </p>
      <div className="flex flex-col gap-5 mt-20">
        <button className="px-14 py-2.5 bg-[#FEE500] rounded-full">
          <Image
            width={180}
            src={kakaoIcon}
            alt="카카오로 빠른 시작하기"
          />
        </button>
        <button className="px-14 py-5 bg-white shadow-sm rounded-full">
          <Image
            width={210}
            src={googleIcon}
            alt="Google 계정으로 시작하기"
          />
        </button>
        <Link
          href={'/auth/login'}
          className="px-14 py-5 bg-[var(--color-1)] text-2xl rounded-full"
        >
          이메일로 시작하기
        </Link>
        <Link
          href={'/auth/signup'}
          className="text-[var(--color-6)] text-lg underline"
        >
          회원가입 하러가기
        </Link>
      </div>
    </div>
  )
}
