'use client'

import InputField from '@/app/_components/fields/InputField'
import SelectField from '@/app/_components/fields/SelectField'
import TextareaField from '@/app/_components/fields/TextareaField'
import { Button } from '@/app/_components/ui/Button'
import { useCheckDuplication } from '@/app/hooks/useCheckDuplication'
import { useCheckStore } from '@/app/stores/checkStore'
import { useForm } from 'react-hook-form'

type RegisterFormData = {
  email: string
  password: string
  confirmPassword: string
  nickname: string
  gender: string
  nation: string
  bio?: string
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>()
  const { checkEmail, checkNickname } = useCheckDuplication()
  const { emailChecked, nicknameChecked } = useCheckStore()

  const handleCheckEmail = async () => {
    const email = watch('email')
    const message = await checkEmail(email)
    alert(message)
  }

  const handleCheckNickname = async () => {
    const nickname = watch('nickname')
    const message = await checkNickname(nickname)
    alert(message)
  }

  const password = watch('password')

  const onSubmit = (data: any) => {
    if (!emailChecked) {
      alert('이메일 중복검사를 완료해주세요.')
      return
    }

    if (!nicknameChecked) {
      alert('닉네임 중복검사를 완료해주세요.')
      return
    }

    console.log('제출 데이터', data)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[415px] text-xl"
    >
      <InputField
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
        type="email"
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
      <InputField
        label="비밀번호 *"
        name="password"
        type="password"
        register={register('password', {
          required: '비밀번호는 필수입니다.',
          minLength: {
            value: 8,
            message: '비밀번호는 8자 이상이어야 합니다.',
          },
        })}
        error={errors.password?.message as string | undefined}
        placeholder="비밀번호를 입력해주세요. (8자리 이상)"
        required
      />
      <InputField
        label="비밀번호 확인 *"
        name="confirmPassword"
        type="password"
        register={register('confirmPassword', {
          required: '비밀번호 확인은 필수입니다.',
          validate: (value) =>
            value === password || '비밀번호가 일치하지 않습니다.',
        })}
        error={errors.confirmPassword?.message as string | undefined}
        placeholder="비밀번호를 한번 더 입력 해주세요."
        required
      />
      <InputField
        label="닉네임 *"
        name="nickname"
        register={register('nickname', {
          required: '닉네임은 필수입니다.',
          minLength: {
            value: 2,
            message: '닉네임은 2자 이상이어야 합니다.',
          },
        })}
        error={errors.nickname?.message as string | undefined}
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
        options={['여성', '남성']}
      />
      {/* <SelectField
        label="국적 *"
        name="nation"
        register={register('nation', {
          required: '국적을 선택해주세요.',
        })}
        error={errors.nation?.message as string | undefined}
        required
        options={[
          '아시아',
          '유럽',
          '중동',
          '아프리카',
          '북아메리카',
          '남아메리카',
          '오세아니아',
        ]}
      /> */}
      <TextareaField
        label="자기소개"
        name="bio"
        placeholder="소개글을 작성하여 신뢰도를 높여주세요!"
        register={register('bio')}
      />

      <Button
        type="submit"
        className="w-full min-w-"
      >
        가입하기
      </Button>
    </form>
  )
}
