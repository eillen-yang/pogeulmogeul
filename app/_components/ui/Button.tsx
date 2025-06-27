import { cn } from '@/app/lib/cn'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  [key: string]: any
}

const base =
  'min-w-38 flex-1 h-[4.6rem] px-6 rounded-full text-2xl font-semibold transition-shadow duration-200'

const variants = {
  primary:
    'bg-[var(--main-color)] text-white shadow-md hover:bg-[var(--main-hover-color)] disabled:bg-[#2e1dad]',
  ghost:
    'bg-[#f5f5f9] text-[#333] hover:bg-[#e8e8f0]disabled:bg-[#f5f5f9] disabled:text-[#aaa]',
  secondary: 'bg-secondary text-white hover:bg-indigo-500',
}

export const Button = ({
  children,
  variant = 'primary',
  className,
  disabled,
  onClick,
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
