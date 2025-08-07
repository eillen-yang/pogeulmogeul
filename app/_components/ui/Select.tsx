import { SelectHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

type Variant = 'default' | 'unstyled'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string
  variant?: Variant
}

const variants: Record<Variant, string> = {
  default: 'border border-[var(--color-2)]',
  unstyled: 'border-none shadow-none ring-0 focus:ring-0',
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, error, children, variant = 'default', ...props },
    ref,
  ) => {
    const baseStyle =
      'w-full text-base sm:text-sm p-3 sm:p-2 h-12 sm:h-10 border border-gray-300 rounded-2xl bg-white'

    return (
      <>
        <select
          ref={ref}
          className={clsx(
            baseStyle,
            variants[variant],
            error && 'border-red-500',
            className,
          )}
          {...props}
        >
          {children}
        </select>
        {error && (
          <p className="text-xl text-red-500 mt-1">{error}</p>
        )}
      </>
    )
  },
)

Select.displayName = 'Select'
export default Select
