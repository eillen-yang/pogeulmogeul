import React from 'react'
import Select from '../ui/Select'
import { UseFormRegisterReturn } from 'react-hook-form'

type SelectFieldProps = {
  label: string
  name: string
  options: string[]
  register: UseFormRegisterReturn
  required?: boolean
  error?: string
  disabled?: boolean
  button?: React.ReactNode
}

export default function SelectInlineField({
  label,
  name,
  options,
  register,
  required = false,
  error,
  disabled = false,
  button,
}: SelectFieldProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-xl font-semibold">
        {label}
      </label>
      <div className="flex gap-4">
        <Select
          {...register}
          disabled={disabled}
          defaultValue=""
          className="border p-2 rounded w-full bg-[#d7d7dc]"
          required={required}
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
        {button}
      </div>
      {error && <p className="text-red-500 text-lg mt-1">{error}</p>}
    </div>
  )
}
