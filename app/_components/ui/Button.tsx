import { cn } from '@/app/lib/cn'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  [key: string]: any
}

const base =
  'h-[5.6rem] bg-[var(--main-color)] rounded-xl px-4 py-2 text-sm font-medium transition'

const variants = {
  primary: 'bg-primary text-white hover:bg-indigo-700',
  secondary: 'bg-secondary text-white hover:bg-indigo-500',
  ghost: 'bg-transparent text-primary hover:bg-primary/10',
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
