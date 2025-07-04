'use client'

import Image from 'next/image'
import img_upload from '@/public/icon/img_upload.svg'

type ImgUploadProps = {
  num: number
  text: string
}

export default function ImgUploadOutlineField({
  num,
  text,
}: ImgUploadProps) {
  return (
    <div className="flex-1 flex flex-col items-center p-5 border border-[var(--color-2)] rounded-2xl font-bold">
      <div className="flex justify-between items-start w-full">
        <div>
          {text === '메인'
            ? '메인이미지 등록(필수)'
            : '상세이미지 등록'}
        </div>
        <div>
          <span className="text-[var(--red-color)]">0</span> / {num}
        </div>
      </div>
      {/* 이미지를 추가했으면 (length > 0) && () */}
      <div className="w-full min-h-60 flex items-center justify-center">
        <Image
          src={img_upload}
          alt="글쓰기 이미지 업로드"
        />
      </div>
      {/* 이미지업로드 시, 메인이면 1개 서브이면 최소0개 최대10개 */}
      {/* <div className='w-full min-h-fit flex items-start justify-items-start'></div> */}
    </div>
  )
}
