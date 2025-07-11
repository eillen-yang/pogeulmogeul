'use client'

import InputInlineField from '@/app/_components/fields/InputInlineField'
import { Button } from '@/app/_components/ui/Button'
import { useSignup } from '@/app/hooks/useSignup'
import { useSignupStore } from '@/app/stores/signupStore'
import { UserType } from '@/app/types/Auth'
import { ModelUser } from '@/app/types/User'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ModelSignupForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<ModelUser, 'email'>>()
  const [signupType, setSignupType] = useState<UserType>('model')
  const { userEmail, clearSignup } = useSignupStore()
  const { mutate: signup, isPending } = useSignup()

  const onSubmit = (modelData: Omit<ModelUser, 'email'>) => {
    if (!userEmail) {
      alert('회원가입 정보가 누락되었습니다.')
      router.replace('/auth/signup/step01')
      return
    }

    const finalData = {
      ...modelData,
      email: userEmail,
    }

    console.log('email', modelData, userEmail, finalData)

    if (signupType === 'model') {
      signup({ formData: finalData, type: signupType })
      clearSignup()
      router.push('/auth/signup/step03')
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-5"
    >
      <InputInlineField
        label="키 *"
        name="height"
        register={register('height', {
          required: '키는 필수입니다.',
        })}
        error={errors.height?.message}
        placeholder="키를 입력해주세요."
      />
      <InputInlineField
        label="몸무게 *"
        name="weight"
        register={register('weight', {
          required: '몸무게는 필수입니다.',
        })}
        error={errors.weight?.message}
        placeholder="몸무게를 입력해주세요."
      />

      <InputInlineField
        label="상의 사이즈 *"
        name="top"
        register={register('top', {
          required: '상의 사이즈는 필수입니다.',
        })}
        error={errors.top?.message}
        placeholder="상의 사이즈를 입력해주세요."
      />

      <InputInlineField
        label="하의 사이즈 *"
        name="bottom"
        register={register('bottom', {
          required: '하의사이즈는 필수입니다.',
        })}
        error={errors.bottom?.message}
        placeholder="하의 사이즈를 입력해주세요."
      />

      <InputInlineField
        label="신발 사이즈 *"
        name="shoes"
        register={register('shoes', {
          required: '신발사이즈는 필수입니다.',
        })}
        error={errors.shoes?.message}
        placeholder="신발사이즈를 입력해주세요."
      />

      <Button
        type="submit"
        className="py-5"
        onClick={() => setSignupType('model')}
      >
        모델회원으로 가입 완료하기
      </Button>
    </form>
  )
}
