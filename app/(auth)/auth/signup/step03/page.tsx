import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center">
      <p>지금바로 포글모글의 다양한 서비스를 이용해보세요.</p>
      <h2>회원가입이 완료되었습니다.</h2>
      <div>
        <Link href={'/'}>메인으로 돌아가기</Link>
        <Link href={'/:username'}>마이페이지 둘러보기</Link>
      </div>
    </div>
  )
}
