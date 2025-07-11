'use client'

import InputInlineField from '@/app/_components/fields/InputInlineField'
import SelectInlineField from '@/app/_components/fields/SelectInlineField'
import TextareaField from '@/app/_components/fields/TextareaField'
import { Button } from '@/app/_components/ui/Button'
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form'
import {
  cityOptions,
  nationalityOptions,
} from '@/app/_constants/selectOptions'
import { AllUserInfo } from '@/app/types/UserInfo'

interface MyBasicProfileContentProps {
  userInfo: AllUserInfo['requestBody']
  register: UseFormRegister<AllUserInfo>
  setValue: UseFormSetValue<AllUserInfo>
  errors: FieldErrors<AllUserInfo>
  editable: Record<string, boolean>
  enable: (field: string) => void
  disable: (field: string) => void
}

export default function ({
  userInfo,
  register,
  setValue,
  errors,
  editable,
  enable,
  disable,
}: MyBasicProfileContentProps) {
  return (
    <>
      <InputInlineField
        label="이메일"
        name="email"
        type="text"
        readOnly
        value={userInfo.email}
      />
      <InputInlineField
        label="이름"
        name="name"
        type="text"
        readOnly
        value={userInfo.name}
      />
      <InputInlineField
        label="비밀번호"
        name="passwd"
        type="password"
        disabled={!editable.passwd}
        defaultValue={userInfo.passwd}
        register={register('requestBody.passwd')}
        button={
          editable.passwd ? (
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setValue('requestBody.passwd', userInfo.passwd)
                disable('passwd')
              }}
            >
              취소
            </Button>
          ) : (
            <Button
              type="button"
              variant="primary"
              onClick={() => enable('passwd')}
            >
              수정
            </Button>
          )
        }
      />
      <InputInlineField
        label="성별"
        name="gender"
        type="text"
        readOnly
        value={userInfo.gender}
      />

      <SelectInlineField
        label="국적 *"
        name="nationality"
        register={register('requestBody.nationality', {
          required: '국적을 선택해주세요.',
        })}
        error={
          errors.requestBody?.nationality?.message as
            | string
            | undefined
        }
        required
        options={nationalityOptions}
        disabled={!editable.nationality}
        button={
          editable.nationality ? (
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setValue(
                  'requestBody.nationality',
                  userInfo.nationality,
                )
                disable('nationality')
              }}
            >
              취소
            </Button>
          ) : (
            <Button
              type="button"
              variant="primary"
              onClick={() => enable('nationality')}
            >
              수정
            </Button>
          )
        }
      />
      <SelectInlineField
        label="지역 *"
        name="city"
        register={register('requestBody.city', {
          required: '지역을 선택해주세요.',
        })}
        error={
          errors.requestBody?.city?.message as string | undefined
        }
        required
        options={cityOptions}
        disabled={!editable.city}
        button={
          editable.city ? (
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setValue('requestBody.city', userInfo.city)
                disable('city')
              }}
            >
              취소
            </Button>
          ) : (
            <Button
              type="button"
              variant="primary"
              onClick={() => enable('city')}
            >
              수정
            </Button>
          )
        }
      />
      <TextareaField
        label="자기소개"
        name="intro"
        register={register('requestBody.intro')}
        defaultValue={userInfo.intro}
        placeholder="내 자신을 소개해주세요."
      />
    </>
  )
}
