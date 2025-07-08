import { UseFormRegisterReturn } from 'react-hook-form'
import Select from '../ui/Select'

type SelectFieldProps = {
  label: string
  name: string
  options: string[]
  register: UseFormRegisterReturn
  required?: boolean
  error?: string
}

export default function SelectOutlineField({
  label,
  name,
  options,
  register,
  required = false,
  error,
}: SelectFieldProps) {
  return (
    <div className="flex items-center gap-10 border border-[var(--color-2)] p-2 rounded-2xl w-full bg-white">
      <span className="flex-1 text-center font-bold">{label}</span>
      <div className="flex-4/5">
        <Select
          {...register}
          onChange={(e) => register.onChange(e)}
          onBlur={register.onBlur}
          ref={register.ref}
          variant="unstyled"
          defaultValue=""
        >
          <option
            value=""
            disabled
          >
            선택
          </option>
          {options.map((opt) => (
            <option
              key={opt}
              value={opt}
            >
              {opt}
            </option>
          ))}
        </Select>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
