'use client'

import FileUploadField from '@/app/_components/fields/FileUploadField'
import InputInlineField from '@/app/_components/fields/InputInlineField'
import SelectInlineField from '@/app/_components/fields/SelectInlineField'
import { Button } from '@/app/_components/ui/Button'
import { useSignup } from '@/app/hooks/useSignup'
import { useSignupStore } from '@/app/stores/signupStore'
import { UserType } from '@/app/types/Auth'
import { PhotographerUser } from '@/app/types/User'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function PhotographerSignupForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhotographerUser>()

  const { userEmail, clearSignup } = useSignupStore()
  const { mutate: signup } = useSignup()

  const onSubmit = (photographerData: PhotographerUser) => {
    if (!userEmail) {
      alert('회원가입 정보가 누락되었습니다.')
      router.replace('/auth/signup/step01')
      return
    }

    const finalData = {
      RequestBody: {
        ...photographerData,
        email: userEmail,
      },
    }

    const formData = new FormData()
    const requestBody = new Blob(
      [JSON.stringify(finalData.RequestBody)],
      {
        type: 'application/json',
      },
    )
    formData.append('RequestBody', requestBody)

    const file = photographerData.File?.[0]
    if (file) {
      formData.append('File', file)
    }

    signup(
      { formData, signupType: 'pro-photo', redirectType: 'basic' },
      {
        onSuccess: () => {
          clearSignup()
        },
      },
    )
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-5"
    >
      <SelectInlineField
        label="출장 가능 여부 *"
        name="businessTrip"
        register={register('RequestBody.businessTrip', {
          required: '출장 가능 여부를 선택해주세요.',
        })}
        error={errors.RequestBody?.businessTrip?.message}
        required
        options={['가능', '불가능', '협의후진행']}
      />
      <SelectInlineField
        label="보정 작업 여부 *"
        name="correction"
        register={register('RequestBody.correction', {
          required: '출장 가능 여부를 선택해주세요.',
        })}
        error={errors.RequestBody?.correction?.message}
        required
        options={['가능', '불가능', '협의후진행']}
      />
      <SelectInlineField
        label="연출 가능 여부 *"
        name="production"
        register={register('RequestBody.production', {
          required: '출장 가능 여부를 선택해주세요.',
        })}
        error={errors.RequestBody?.production?.message}
        required
        options={['가능', '불가능', '협의후진행']}
      />

      <div>
        <InputInlineField
          label="포트폴리오 *"
          name="url"
          register={register('RequestBody.url', {
            required: '포트폴리오 주소를 입력해주세요.',
          })}
          error={errors.RequestBody?.url?.message}
          placeholder="포트폴리오 주소를 입력해주세요."
        />

        <FileUploadField
          name="File"
          register={register('File')}
          error={errors.File?.message}
        />
      </div>

      <Button
        type="button"
        className="py-5"
        onClick={() => router.push('/auth/signup/step03')}
      >
        사진작가회원으로 가입 완료하기
      </Button>
    </form>
  )
}
