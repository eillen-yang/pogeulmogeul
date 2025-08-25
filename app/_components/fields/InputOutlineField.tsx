import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  register: UseFormRegisterReturn
  maxLength?: number
  fieldType?: string
}

export default function InputOutlineField({
  label,
  error,
  register,
  maxLength,
  fieldType = 'default', // 필드 역할 지정
  ...rest
}: Props) {
  const defaultMaxLength =
    maxLength ??
    (fieldType === 'title' ? 50 : fieldType === 'location' ? 30 : 10)

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (
      rest.type === 'number' &&
      (e.key === 'ArrowUp' || e.key === 'ArrowDown')
    ) {
      e.preventDefault()
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-10 border border-[var(--color-2)] rounded-2xl ring-[var(--main-color)]">
        <span className="felx-1 w-40 text-center font-bold">
          {label}
        </span>
        <input
          className="flex-4/5"
          type="text"
          placeholder="제목을 입력해주세요."
          maxLength={defaultMaxLength}
          onKeyDown={handleKeyDown}
          {...register}
          {...rest}
        />
      </label>
      {error && <p className="text-[var(--red-color)]">{error}</p>}
    </div>
  )
}
