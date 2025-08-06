import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  register: UseFormRegisterReturn
}

export default function InputOutlineField({
  label,
  error,
  register,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-10 border border-[var(--color-2)] rounded-2xl ring-[var(--main-color)]">
        <span className="flex-1 text-center font-bold">{label}</span>
        <input
          className="flex-4/5"
          type="text"
          placeholder="제목을 입력해주세요."
          {...register}
          {...rest}
        />
      </label>
      {error && <p className="text-[var(--red-color)]">{error}</p>}
    </div>
  )
}
