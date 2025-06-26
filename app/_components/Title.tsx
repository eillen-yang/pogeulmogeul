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
    <Tag>
      <div className="flex items-center justify-between gap-3 mt-5">
        {prefix && (
          <h2 className="pb-5 font-bold text-3xl">
            {highlight}
            <span className="text-[var(--main-color)]">{prefix}</span>
          </h2>
        )}
        {href && (
          <div className="flex flex-row text-xl">
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
      {/* {highlight && (
        <h2 className="mb-5 font-bold text-3xl">
          {prefix}
          <span className="text-[var(--main-color)]">
            {highlight}
          </span>
        </h2>
      )}
      {suffix && <span> {suffix}</span>} */}
    </Tag>
  )
}
