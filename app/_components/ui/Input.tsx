import { InputHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={clsx(
            'w-full text-2xl border border-[var(--color-2)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]',
            error && 'border-red-500',
            className,
          )}
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
