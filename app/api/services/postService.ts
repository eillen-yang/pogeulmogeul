import { Post } from '@/app/types/Post'
import { getApiEndpoint } from '@/app/utils/getApiEndPoint'

const makeRequestBody = (
  pathname: string,
  email: string,
  form: Post,
) => {
  const base = {
    email,
    title: form.title,
    contents: form.contents,
    firstDate: form.firstDate.toISOString(),
    lastDate: form.lastDate.toISOString(),
  }

  if (pathname.includes('photoshop')) {
    return {
      ...base,
      category:
        typeof form.category === 'string'
          ? form.category
          : form.category[0],
      price: form.price,
    }
  }
  if (pathname.includes('free')) {
    return { ...base, place: form.place }
  }
  if (
    pathname.includes('model') ||
    pathname.includes('photographer')
  ) {
    return {
      ...base,
      category: Array.isArray(form.category)
        ? form.category
        : [form.category],
      price: form.price,
      place: form.place,
    }
  }
  throw new Error('유효하지 않은 게시판 경로입니다.')
}

export const postService = {
  create: async (
    form: Post,
    Title: File,
    Details: File[],
    pathname: string,
    email: string,
    token: string,
  ) => {
    const requestBody = makeRequestBody(pathname, email, form)
    const formData = new FormData()

    console.log('✅ requestBody', requestBody)

    formData.append(
      'RequestBody',
      new Blob([JSON.stringify(requestBody)], {
        type: 'application/json',
      }),
    )
    if (Details?.length > 0) {
      Details.forEach((file) => formData.append('Details', file))
    }

    if (Title) {
      formData.append('Title', Title)
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_ENDPOINT}${getApiEndpoint(pathname)}`,
        {
          method: 'POST',
          headers: { Token: token },
          body: formData,
        },
      )
      if (!res.ok) {
        const errData = await res.text()
        console.error('❌ 서버 응답 에러', res.status, errData)

        throw new Error(
          `게시글 등록 실패ㅠ: ${res.status} ${errData}`,
        )
      }

      const result = await res.json()
      console.log('성공 :', result)
      alert('업로드 성공 !')
    } catch (error) {
      console.error('실패 :', error)
      alert('업로드 실패 (콘솔 확인)')
    }
  },

  update: async (
    form: Post,
    Title: File,
    Details: File[],
    pathname: string,
    email: string,
    token: string,
  ) => {
    const requestBody = {
      id: form.id,
      ...makeRequestBody(pathname, email, form),
    }

    const formData = new FormData()
    formData.append(
      'RequestBody',
      new Blob([JSON.stringify(requestBody)], {
        type: 'application/json',
      }),
    )
    formData.append('Title', Title)
    Details.forEach((file) => formData.append('Details', file))

    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_ENDPOINT
      }${getApiEndpoint(pathname)}`,
      {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      },
    )

    if (!res.ok) throw new Error('게시글 수정 실패 ㅠ')
    return res.json()
  },

  delete: async (
    boardType: string,
    id: number,
    email: string,
    token: string,
  ) => {
    const endpoint = getApiEndpoint(boardType)

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT}${endpoint}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, email }),
      },
    )

    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.message || '게시글 삭제 실패ㅠ')
    }

    return res.json()
  },
}
