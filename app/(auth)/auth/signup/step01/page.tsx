import ConditionsForm from '../../_components/ConditionsForm'

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center">
      <span className="text-lg">STEP 01.</span>
      <h2 className="pb-8 text-4xl font-bold">
        아래 약관에 동의해주세요.
      </h2>
      <ConditionsForm />
    </div>
  )
}
