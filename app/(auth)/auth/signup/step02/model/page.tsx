import ModelSignupForm from '../../../_components/ModelSignupForm'

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center">
      <span className="text-xl font-medium">STEP 03.</span>
      <h2 className="pb-8 text-4xl font-bold">
        모델 회원정보를 입력해주세요.
      </h2>
      <ModelSignupForm />
    </div>
  )
}
