import Textarea from '../ui/Textarea'

type TextareaFieldProps = {
  label: string
  name: string
  register: any
  required?: boolean
  placeholder?: string
  error?: string
}

export default function TextareaOutlineField({
  label,
  name,
  register,
  placeholder,
  required = false,
  error,
}: TextareaFieldProps) {
  return (
    <div>
      <div className="flex gap-10 py-5 border border-[var(--color-2)] rounded-2xl text-2xl">
        <span className="w-40 text-center font-semibold">
          {label}
        </span>
        <Textarea
          rows={6}
          {...register}
          variant="unstyled"
          placeholder={placeholder}
          error={error}
          className="w-full min-h-[150px]"
        />
      </div>

      {error && <p className="text-md text-red-500 mt-1">{error}</p>}
    </div>
  )
}
