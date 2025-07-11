import Textarea from '../ui/Textarea'

type TextareaFieldProps = {
  label: string
  name: string
  register: any
  required?: boolean
  placeholder?: string
}

export default function TextareaField({
  label,
  name,
  register,
  placeholder,
  required = false,
}: TextareaFieldProps) {
  return (
    <div>
      <label className="block mb-1 text-xl font-semibold">
        {label}
      </label>
      <Textarea
        rows={6}
        {...register}
        placeholder={placeholder}
        className="border p-5 rounded w-full min-h-[150px] text-2xl"
      />
    </div>
  )
}
