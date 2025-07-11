'use client'

import DateRangePickerField from '@/app/_components/fields/DateRangePickerField'
import ImgUploadOutlineField from '@/app/_components/fields/ImgUploadOutlineField'
import InputOutlineField from '@/app/_components/fields/InputOutlineField'
import SelectOutlineField from '@/app/_components/fields/SelectOutlineField'
import TextareaOutlineField from '@/app/_components/fields/TextareaOutlineField'
import { Button } from '@/app/_components/ui/Button'
import { usePostSubmit } from '@/app/hooks/usePostSubmit'
import { useAuthStore } from '@/app/stores/authStore'
import { Post } from '@/app/types/Post'
import getCategoryOptionsByPath from '@/app/utils/getCategoryOptionsByPath'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function EditForm() {
  const router = useRouter()
  const { user } = useAuthStore()

  const pathname = usePathname()
  const isFree = pathname.includes('free')
  const isPhotoshop = pathname.includes('photoshop')
  const options = getCategoryOptionsByPath(usePathname())

  const [mainImage, setMainImage] = useState<File | null>(null)
  const [detailImages, setDetailImages] = useState<File[]>([])

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: {
      title: '',
      contents: '',
      price: 0,
      category: [],
      firstDate: undefined,
      lastDate: undefined,
    },
  })

  const { onSubmit } = usePostSubmit({
    mainImage,
    detailImages,
    isEdit: false,
  })

  useEffect(() => {
    setValue('firstDate', new Date())
    setValue('lastDate', new Date())
  }, [setValue])

  useEffect(() => {
    if (user === null) {
      router.replace('/auth/login')
    }
  }, [user, router])

  if (user === undefined) return null

  return (
    <form
      onSubmit={handleSubmit((form) => {
        console.log('폼 제출됌', form)
        onSubmit(form)
      })}
      className="flex flex-col gap-5 text-2xl"
      // className="space-y-4 p-6 max-w-3xl mx-auto"
    >
      <InputOutlineField
        label="제목"
        placeholder="제목을 입력해주세요."
        register={register('title', {
          required: '제목을 입력해주세요.',
        })}
        error={errors.title?.message}
      />

      {!isFree && (
        <SelectOutlineField
          label="카테고리"
          name="category"
          register={register('category', {
            required: '카테고리를 선택해주세요.',
          })}
          error={errors.category?.message as string | undefined}
          required
          options={options}
        />
      )}

      <DateRangePickerField
        control={control}
        firstDate="firstDate"
        lastDate="lastDate"
        firstDateError={errors.firstDate?.message}
        lastDateError={errors.lastDate?.message}
      />

      {!isPhotoshop && (
        <InputOutlineField
          label="장소"
          placeholder="장소를 입력해주세요."
          register={register('place', {
            required: '장소를 입력해주세요.',
          })}
          error={errors.place?.message}
        />
      )}

      {!isFree && (
        <InputOutlineField
          label="가격"
          type="number"
          placeholder="가격을 입력해주세요."
          register={register('price', {
            required: '가격을 입력해주세요',
            valueAsNumber: true,
          })}
          error={errors.price?.message}
        />
      )}

      <TextareaOutlineField
        name="contents"
        label="내용"
        placeholder="상세 내용을 입력해주세요."
        register={register('contents', {
          required: '내용을 입력해주세요.',
        })}
        error={errors.contents?.message}
      />
      <div className="flex gap-5">
        <ImgUploadOutlineField
          onChange={(file) => setMainImage(file as File)}
          num={1}
          text="메인"
        />
        <ImgUploadOutlineField
          onChange={(files) => setDetailImages(files as File[])}
          num={10}
          text="상세"
        />
      </div>

      <Button
        type="submit"
        children="완료하기"
        className="py-6"
      />
    </form>
  )
}
