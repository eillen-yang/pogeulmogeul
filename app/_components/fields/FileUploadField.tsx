'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import FileUploadImg from '@/public/icon/file_upload.svg'
import Input from '../ui/Input'

type FileUploadFieldProps = {
  name: string
  register: any
  error?: string
  accept?: string
  maxSizeMB?: number
}

export default function FileUploadField({
  name,
  register,
  error,
  accept = '.pdf',
  maxSizeMB = 500,
}: FileUploadFieldProps) {
  const [fileName, setFileName] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(`${maxSizeMB}MB 이하의 파일만 업로드 가능합니다.`)
        e.target.value = ''
        setFileName('')
      } else {
        setFileName(file.name)
      }
    }
  }
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor={name}
          className="flex items-center justify-between border border-[var(--color-2)] rounded-2xl min-h-12 p-5 text-2xl text-[var(--color-5)] bg-gray-50 cursor-pointer hover:bg-gray-100"
        >
          <span className="truncate">
            {fileName || 'PDF 파일을 업로드 해주세요'}
          </span>
          <Image
            width={20}
            height={20}
            src={FileUploadImg}
            alt="파일 업로드 이미지"
          />
        </label>
        <Input
          id={name}
          name={name}
          type="file"
          accept={accept}
          className="hidden"
          {...register}
          onChange={handleChange}
        />
      </div>

      {/* 제한 안내 */}
      <p className="text-base text-gray-500 mt-1">
        * 파일업로드 용량제한 {maxSizeMB}MB, (PDF파일만 가능)
      </p>

      {error && (
        <p className="text-red-500 text-base mt-1">{error}</p>
      )}
    </div>
  )
}
