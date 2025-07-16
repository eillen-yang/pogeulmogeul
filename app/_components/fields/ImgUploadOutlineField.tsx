'use client'

import Image from 'next/image'
import img_upload from '@/public/icon/img_upload.svg'
import { ChangeEvent, useRef, useState } from 'react'

type ImgUploadProps = {
  num: number
  text: string
  onChange: (files: File[] | File | null) => void
}

export default function ImgUploadOutlineField({
  num,
  text,
  onChange,
}: ImgUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const validFiles: File[] = []

    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/')) {
        alert('이미지 파일만 업로드 가능합니다.')
        continue
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('5MB 이하의 파일만 업로드 가능합니다.')
        continue
      }
      validFiles.push(file)
    }

    const limitedFiles = validFiles.slice(0, num)

    setSelectedFiles(limitedFiles)
    setPreviewUrls(
      limitedFiles.map((file) => URL.createObjectURL(file)),
    )

    if (num === 1) {
      onChange(limitedFiles[0] || null)
    } else {
      onChange(limitedFiles)
    }
  }

  const handleDelete = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index)
    setSelectedFiles(newFiles)
    setPreviewUrls(newFiles.map((file) => URL.createObjectURL(file)))
    onChange(num === 1 ? null : newFiles)
  }

  return (
    <div className="flex-1 flex flex-col items-center p-5 border border-[var(--color-2)] rounded-2xl font-bold">
      <div className="flex justify-between items-start w-full">
        <div>
          {text === '메인'
            ? '메인이미지 등록(필수)'
            : '상세이미지 등록'}
        </div>
        <div>
          <span className="text-[var(--red-color)]">
            {selectedFiles.length}
          </span>{' '}
          / {num}
        </div>
      </div>
      {/* 이미지를 추가했으면 (length > 0) && () */}
      <div
        className="relative w-full min-h-60 flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        {previewUrls.length === 0 ? (
          <>
            <Image
              src={img_upload}
              alt="글쓰기 이미지 업로드"
            />

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              multiple={text === '메인' ? num > 1 : num > 0}
              onChange={handleChange}
              className="hidden"
            />
          </>
        ) : (
          <div className="grid grid-cols-3 gap-3 w-full">
            {previewUrls.map((url, i) => (
              <div
                key={i}
                className="reative group"
              >
                <Image
                  width={128}
                  height={128}
                  src={url}
                  alt={`preview-${i}`}
                  className="w-full h-32 object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => handleDelete(i)}
                  className="absolute top-1 right-1 bg-black bg-opacity-60 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center group-hover:flex"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* 이미지업로드 시, 메인이면 1개 서브이면 최소0개 최대10개 */}
      {/* <div className='w-full min-h-fit flex items-start justify-items-start'></div> */}
    </div>
  )
}
