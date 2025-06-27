type SelectFieldProps = {
  label: string
  name: string
  options: string[]
  register: any
  required?: boolean
  error?: string
}

export default function SelectField({
  label,
  name,
  options,
  register,
  required = false,
  error,
}: SelectFieldProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-xl font-semibold">
        {label}
      </label>
      <select
        {...register}
        defaultValue=""
        className="border p-2 rounded w-full bg-[#d7d7dc]"
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
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
