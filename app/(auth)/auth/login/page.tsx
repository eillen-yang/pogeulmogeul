import { Button } from '@/app/_components/ui/Button'

export default function Page() {
  return (
    <div>
      <h1 className="pb-20 text-4xl font-bold text-center">
        이메일로 로그인하기
      </h1>
      <form
        action=""
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-2 w-[40rem] text-2xl font-medium">
          <label htmlFor="">이메일</label>
          <input
            type="email"
            width={415}
            height={55}
          />
        </div>
        <div className="flex flex-col gap-2 w-[40rem] text-2xl font-medium">
          <label htmlFor="">비밀번호</label>
          <input
            type="password"
            width={415}
            height={55}
          />
        </div>
        <div className="flex justify-center gap-4">
          <Button variant="ghost">취소</Button>
          <Button variant="primary">로그인</Button>
        </div>
      </form>
    </div>
  )
}
