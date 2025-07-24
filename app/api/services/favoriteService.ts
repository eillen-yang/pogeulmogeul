interface FavoritePayload {
  name?: string
  token: string | null
}

export const favoriteService = {
  addFavorite: async ({ name, token }: FavoritePayload) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favorite`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      },
    )

    if (!res.ok) {
      throw new Error('즐겨찾기 추가 실패')
    }

    return res.json()
  },
  removeFavorite: async ({ name, token }: FavoritePayload) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favorite`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      },
    )

    if (!res.ok) {
      throw new Error('즐겨찾기 삭제 실패')
    }

    return res.json()
  },
  getAllFavorites: async (token: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/favorite/all`,
      {
        method: 'POST',
        headers: {
          Token: token,
        },
      },
    )

    if (!res.ok) {
      throw new Error('즐겨찾기 조회 실패')
    }

    return res.json()
  },
}
