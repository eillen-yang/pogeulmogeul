import { TextareaHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

type Variant = 'default' | 'unstyled'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string
  variant?: Variant
}

const variants: Record<Variant, string> = {
  default:
    'border border-[var(--color-2)] focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]',
  unstyled: 'flex-4/5 border-none shadow-none ring-0 focus:ring-0',
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseStyle = 'w-full text-2xl rounded-2xl resize-none'

    return (
      <textarea
        ref={ref}
        className={clsx(baseStyle, variants[variant], className)}
        {...props}
      />
    )
  },
)

Textarea.displayName = 'Textarea'
export default Textarea
