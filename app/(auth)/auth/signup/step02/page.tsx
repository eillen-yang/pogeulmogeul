import BasicSignupForm from '../../_components/BasicSignupForm'

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center">
      <span className="text-xl font-medium">STEP 02.</span>
      <h2 className="pb-8 text-4xl font-bold">
        회원정보를 입력해주세요.
      </h2>

      <BasicSignupForm />
    </div>
  )
}
