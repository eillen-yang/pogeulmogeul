import { InputHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, onChange, error, disabled, readOnly, ...props },
    ref,
  ) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={clsx(
            'w-full text-2xl border border-[var(--color-2)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]',
            error && 'border-red-500',
            readOnly && 'bg-gray-100 text-gray-500 cursor-default',
            disabled &&
              'bg-gray-200 text-gray-400 cursor-not-allowed',
            className,
          )}
          disabled={disabled}
          readOnly={readOnly}
          onChange={onChange}
          {...props}
        />
        {error && (
          <p className="text-lg text-red-500 mt-1">{error}</p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default Input
