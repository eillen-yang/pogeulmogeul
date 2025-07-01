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
      'w-full text-2xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]'

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
