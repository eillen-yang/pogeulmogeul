import Image from 'next/image'
import Link from 'next/link'
import arrowRight from '@/public/icon/arrow_right.svg'

type TitleProps = {
  prefix?: string
  highlight?: string
  suffix?: string
  href?: string
  as?: 'h1' | 'h2' | 'h3'
}

export const Title = ({
  prefix,
  highlight,
  suffix,
  href,
  as = 'h2',
}: TitleProps) => {
  const Tag = as

  return (
    <div className="flex items-center justify-between gap-3 mt-5">
      <Tag className="pb-5 font-bold text-3xl">
        {highlight}
        {prefix && (
          <span className="text-[var(--main-color)]">{prefix}</span>
        )}
        {suffix}
      </Tag>
      {href && (
        <div className="flex flex-row items-center text-xl">
          <Link href={href}>더보기</Link>
          <Image
            width={16}
            height={16}
            src={arrowRight}
            alt="화살표"
          />
        </div>
      )}
    </div>
  )
}
