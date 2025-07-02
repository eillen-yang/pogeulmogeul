import Input from '../ui/Input'

type InputFieldProps = {
  label: string
  name: string
  type?: string
  register: any
  required?: boolean
  placeholder?: string
  button?: React.ReactNode
  error?: string
}

export default function InputInlineField({
  label,
  name,
  type = 'text',
  register,
  required = false,
  placeholder,
  button,
  error,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-xl font-semibold">
        {label}
      </label>
      <div className="flex gap-2">
        <Input
          name={name}
          type={type}
          {...register}
          placeholder={placeholder}
          className="border p-2 rounded w-full"
        />
        {button && button}
      </div>
      {error && <p className="text-red-500 text-md mt-2">{error}</p>}
    </div>
  )
}
