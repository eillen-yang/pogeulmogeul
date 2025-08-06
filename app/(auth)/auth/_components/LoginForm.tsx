'use client'

import InputInlineField from '@/app/_components/fields/InputInlineField'
import { Button } from '@/app/_components/ui/Button'
import { useLogin } from '@/app/hooks/useLogin'
import { LoginFormData, UserType } from '@/app/types/Auth'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>()

  const { mutate: login } = useLogin()
  const [userType, setUserType] = useState<UserType>('basic')

  const onSubmit = (data: LoginFormData) => {
    login({ ...data, type: userType })
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[370px] text-2xl flex flex-col gap-10"
    >
      <InputInlineField
        label="이메일"
        name="email"
        register={register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /^\S+@\S+$/i,
            message: '올바른 이메일 형식을 입력해주세요.',
          },
        })}
        error={errors.email?.message}
        placeholder="이메일을 입력해주세요."
      />

      <InputInlineField
        label="비밀번호"
        name="passwd"
        type="password"
        register={register('passwd', {
          required: '비밀번호를 입력해주세요.',
          minLength: {
            value: 8,
            message: '비밀번호는 최소 8자 이상이어야 합니다.',
          },
        })}
        error={errors.passwd?.message}
        placeholder="비밀번호를 입력해주세요."
      />
      <div className="flex justify-center gap-4">
        <Button
          variant="ghost"
          type="button"
        >
          취소
        </Button>
        <Button
          variant="primary"
          type="submit"
        >
          로그인
        </Button>
      </div>
    </form>
  )
}
