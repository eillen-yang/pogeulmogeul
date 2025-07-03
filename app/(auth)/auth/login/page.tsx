import LoginForm from '../_components/LoginForm'

export default function Page() {
  return (
    <div>
      <h1 className="pb-20 text-4xl font-bold text-center">
        이메일로 로그인하기
      </h1>
      <LoginForm />
    </div>
  )
}
