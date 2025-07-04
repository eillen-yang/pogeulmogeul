import PhotographerSignupForm from '../../../_components/PhotographerSignupForm'

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center">
      <span className="text-xl font-medium">STEP 03.</span>
      <h2 className="pb-8 text-4xl font-bold">
        사진기사 회원정보를 입력해주세요.
      </h2>
      <PhotographerSignupForm />
    </div>
  )
}
