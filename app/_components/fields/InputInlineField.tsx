import Input from '../ui/Input'

type InputFieldProps = {
  label?: string
  name: string
  type?: string
  register?: any
  value?: string
  readOnly?: boolean
  disabled?: boolean
  placeholder?: string
  defaultValue?: string
  button?: React.ReactNode
  error?: string
}

export default function InputInlineField({
  label,
  name,
  type = 'text',
  register,
  value,
  readOnly,
  disabled,
  placeholder,
  defaultValue,
  button,
  error,
}: InputFieldProps) {
  const inputProps = {
    name,
    label,
    type,
    placeholder,
    readOnly,
    disabled,
    defaultValue,
    value,
    ...(!readOnly && !disabled && register ? register : {}),
  }
  return (
    <div className="mb-4">
      {label && (
        <label className="block pl-2 mb-1 text-xl font-semibold">
          {label}
        </label>
      )}
      <div className="flex gap-2">
        <Input
          {...inputProps}
          error={error}
          className="border p-2 rounded w-full"
        />
        {button && button}
      </div>
    </div>
  )
}
