'use client'

import { useAuthStore } from '@/app/stores/authStore'
import DetailProfileCard from './DetailProfileCard'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUserInfo } from '@/app/hooks/useUserInfo'
import { Button } from '@/app/_components/ui/Button'
import { useForm } from 'react-hook-form'
import { useEditableFields } from '@/app/hooks/useEditableFields'
import {
  cityOptions,
  nationalityOptions,
} from '@/app/_constants/selectOptions'
import { mapUserTypeToLabel } from '@/app/utils/mapUserTypeToLabel'
import { UserType } from '@/app/types/Auth'
import { AllUserInfo } from '@/app/types/UserInfo'
import MyBasicProfileForm from './MyBasicProfileForm'

export default function MyProfileContent() {
  const router = useRouter()
  const { user } = useAuthStore()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<AllUserInfo>()

  const email = user?.email ?? ''
  const { data: userInfo, isLoading } = useUserInfo(email, 'all')

  const fieldNames = ['passwd', 'nationality', 'city', 'intro']
  const { editable, enable, disable } = useEditableFields(fieldNames)

  useEffect(() => {
    if (!user) {
      router.replace('/auth/login')
      return
    }
  }, [user])

  useEffect(() => {
    if (
      userInfo?.requestBody?.city &&
      cityOptions.includes(userInfo.requestBody.city)
    ) {
      setValue('requestBody.city', userInfo.requestBody.city)
    }

    if (
      userInfo?.requestBody?.nationality &&
      nationalityOptions.includes(userInfo.requestBody.nationality)
    ) {
      setValue(
        'requestBody.nationality',
        userInfo.requestBody.nationality,
      )
    }
  }, [userInfo, setValue])

  console.log('userInfo', userInfo, 'user', user)

  if (!user || isLoading || !userInfo) return null

  const onSubmit = () => {}

  return (
    <div className="flex gap-4 pb-64">
      <div className="flex-1">
        <DetailProfileCard user={userInfo} />
      </div>

      <div className="flex-1/4 h-full text-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <MyBasicProfileForm
            userInfo={userInfo.requestBody}
            register={register}
            setValue={setValue}
            errors={errors}
            editable={editable}
            enable={enable}
            disable={disable}
          />
          <div className="mt-10 text-center">
            <Button
              type="submit"
              children="정보수정 완료"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
