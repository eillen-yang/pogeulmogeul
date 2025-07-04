'use client'

import DateRangePickerField from '@/app/_components/fields/DateRangePickerField'
import ImgUploadOutlineField from '@/app/_components/fields/ImgUploadOutlineField'
import InputOutlineField from '@/app/_components/fields/InputOutlineField'
import SelectOutlineField from '@/app/_components/fields/SelectOutlineField'
import TextareaOutlineField from '@/app/_components/fields/TextareaOutlineField'
import { Button } from '@/app/_components/ui/Button'
import { useAuthStore } from '@/app/stores/authStore'
import { Post } from '@/app/types/Post'
import getCategoryOptionsByPath from '@/app/utils/getCategoryOptionsByPath'
import { usePathname, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function EditForm() {
  const router = useRouter()
  const { user } = useAuthStore()

  const pathname = usePathname()
  const isFree = pathname.includes('free')
  const isPhotoshop = pathname.includes('photoshop')

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: {
      title: '',
      content: '',
      price: 0,
      location: '',
      category: [],
      startData: new Date(),
      endDate: new Date(),
    },
  })

  const onSubmit = (data: Post) => {
    const requestBody = {
      title: data.title,
      contents: data.content,
      price: data.price,
      place: data.location,
      category: [data.category],
      firstDate: data.startData.toISOString(),
      lastDate: data.endDate.toISOString(),
    }

    const formData = new FormData()
    const requestBlob = new Blob([JSON.stringify(requestBody)], {
      type: 'application/json',
    })
    formData.append('request', requestBlob)
    formData.append('Title', data.title)
  }

  if (!user) {
    router.replace('/auth/login')
    return
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          options={getCategoryOptionsByPath(usePathname())}
        />
      )}

      <DateRangePickerField
        control={control}
        firstDate="firstDate"
        endDate="endDate"
        firstDateError={errors.startData?.message}
        endDateError={errors.endDate?.message}
      />

      {!isPhotoshop && (
        <InputOutlineField
          label="장소"
          placeholder="장소를 입력해주세요."
          register={register('location', {
            required: '장소를 입력해주세요.',
          })}
          error={errors.location?.message}
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
        name="content"
        label="내용"
        placeholder="상세 내용을 입력해주세요."
        register={register('content', {
          required: '내용을 입력해주세요.',
        })}
        error={errors.content?.message}
      />
      <div className="flex gap-5">
        <ImgUploadOutlineField
          num={1}
          text="메인"
        />
        <ImgUploadOutlineField
          num={10}
          text="상세"
        />
      </div>

      <Button
        children="완료하기"
        className="py-6"
      />
    </form>
  )
}
