'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useAuthStore } from '../stores/authStore'
import { useCallback } from 'react'
import { Post } from '../types/Post'
import { postService } from '../api/services/postService'
import { categoryMap } from '../utils/categoryMap'
import { useQueryClient } from '@tanstack/react-query'

interface UsePostSubmitProps {
  mainImage?: File | null
  detailImages?: File[]
  isEdit: boolean
}

export const usePostSubmit = ({
  mainImage,
  detailImages = [],
  isEdit = false,
}: UsePostSubmitProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const { user, token } = useAuthStore()
  const queryClient = useQueryClient()

  const onSubmit = useCallback(
    async (form: Post) => {
      console.log('디버깅 user token', user, token)

      if (!user || !token) {
        alert('로그인이 필요합니다.')
        return
      }

      if (!mainImage) {
        alert('대표 이미지를 등록해주세요.')
        return
      }

      if (detailImages.length > 10) {
        alert('상세 이미지는 최대 10장까지 업로드 가능합니다.')
        return
      }

      // category
      const categoryList: string[] = Array.isArray(form.category)
        ? form.category
        : [form.category]

      if (
        !pathname.includes('free/edit') &&
        categoryList.length === 0
      ) {
        alert('카테고리를 선택해주세요.')
        return
      }

      // API URL
      const validCategoryValues = Object.values(categoryMap)
      const categoryJob = validCategoryValues.find((val) =>
        pathname.includes(val),
      )

      try {
        const result = isEdit
          ? await postService.update(
              form,
              mainImage,
              detailImages,
              pathname,
              user.email,
              token,
            )
          : await postService.create(
              form,
              mainImage,
              detailImages,
              pathname,
              user.email,
              token,
            )

        queryClient.invalidateQueries({
          queryKey: ['posts', `/post/${categoryJob}`],
        })
        router.push(`/post/${categoryJob}`)
      } catch (err) {
        console.error(err)
        alert(
          `게시글 ${isEdit ? '수정' : '등록'} 중 오류가 발생했습니다.`,
        )
      }
    },
    [mainImage, detailImages, pathname, user, token, isEdit, router],
  )

  return { onSubmit }
}
