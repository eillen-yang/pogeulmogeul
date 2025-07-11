'use client'

import InputInlineField from '@/app/_components/fields/InputInlineField'
import SelectField from '@/app/_components/fields/SelectInlineField'
import TextareaField from '@/app/_components/fields/TextareaField'
import { Button } from '@/app/_components/ui/Button'
import {
  cityOptions,
  genderOptions,
  nationalityOptions,
} from '@/app/_constants/selectOptions'
import { useCheckDuplication } from '@/app/hooks/useCheckDuplication'
import { useSignup } from '@/app/hooks/useSignup'
import { useSignupFlow } from '@/app/hooks/useSignupFlow'
import { useCheckStore } from '@/app/stores/checkStore'
import { UserType } from '@/app/types/Auth'
import { User } from '@/app/types/User'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function BasicSignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>()
  const { checkEmail, checkNickname } = useCheckDuplication()
  const { emailChecked, nicknameChecked } = useCheckStore()

  const [signupType, setSignupType] = useState<UserType>('basic')
  const { mutate: signup } = useSignup()

  const handleCheckEmail = async () => {
    const email = watch('email')
    const message = await checkEmail(email)
    alert(message)
  }

  const handleCheckNickname = async () => {
    const nickname = watch('name')
    const message = await checkNickname(nickname)
    alert(message)
  }

  const passwd = watch('passwd')

  const onSubmit = (data: User) => {
    if (!emailChecked || !nicknameChecked) {
      alert('중복검사를 완료해주세요.')
      return
    }
    signup({ formData: data, type: signupType })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-5"
    >
      <InputInlineField
        label="이메일 *"
        name="email"
        register={register('email', {
          required: '이메일은 필수입니다.',
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: '이메일 형식을 확인해주세요.',
          },
        })}
        error={errors.email?.message as string | undefined}
        required
        type="text"
        placeholder="이메일을 입력해 주세요."
        button={
          <Button
            type="button"
            variant="primary"
            onClick={handleCheckEmail}
          >
            중복 검사
          </Button>
        }
      />
      <InputInlineField
        label="비밀번호 *"
        name="passwd"
        type="password"
        register={register('passwd', {
          required: '비밀번호는 필수입니다.',
          minLength: {
            value: 8,
            message: '비밀번호는 8자 이상이어야 합니다.',
          },
        })}
        error={errors.passwd?.message as string | undefined}
        placeholder="비밀번호를 입력해주세요. (8자리 이상)"
        required
      />
      <InputInlineField
        label="비밀번호 확인 *"
        name="passwd2"
        type="password"
        register={register('passwd2', {
          required: '비밀번호 확인은 필수입니다.',
          validate: (value) =>
            value === passwd || '비밀번호가 일치하지 않습니다.',
        })}
        error={errors.passwd2?.message as string | undefined}
        placeholder="비밀번호를 한번 더 입력 해주세요."
        required
      />
      <InputInlineField
        label="닉네임 *"
        name="name"
        register={register('name', {
          required: '닉네임은 필수입니다.',
          minLength: {
            value: 2,
            message: '닉네임은 2자 이상이어야 합니다.',
          },
        })}
        error={errors.name?.message as string | undefined}
        required
        placeholder="닉네임을 입력해주세요."
        button={
          <Button
            type="button"
            variant="primary"
            onClick={handleCheckNickname}
          >
            중복검사
          </Button>
        }
      />
      <SelectField
        label="성별 *"
        name="gender"
        register={register('gender', {
          required: '성별을 선택해주세요.',
        })}
        error={errors.gender?.message as string | undefined}
        required
        options={genderOptions}
      />
      <SelectField
        label="국적 *"
        name="nationality"
        register={register('nationality', {
          required: '국적을 선택해주세요.',
        })}
        error={errors.nationality?.message as string | undefined}
        required
        options={nationalityOptions}
      />
      <SelectField
        label="지역 *"
        name="city"
        register={register('city', {
          required: '지역을 선택해주세요.',
        })}
        error={errors.city?.message as string | undefined}
        required
        options={cityOptions}
      />
      <TextareaField
        label="자기소개"
        name="intro"
        placeholder="소개글을 작성하여 신뢰도를 높여주세요!"
        register={register('intro')}
      />

      <Button
        onClick={() => setSignupType('basic')}
        type="submit"
        className="py-5"
      >
        일반회원으로 가입하기
      </Button>
      <Button
        variant="ghost"
        type="submit"
        className="py-5"
        onClick={() => setSignupType('model')}
      >
        모델회원으로 가입하기
      </Button>
      <Button
        variant="ghost"
        type="submit"
        className="py-5"
        onClick={() => setSignupType('pro-photo')}
      >
        사진작가회원으로 가입하기
      </Button>
    </form>
  )
}
