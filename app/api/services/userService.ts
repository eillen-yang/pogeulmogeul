import { UserType } from '@/app/types/Auth'
import { authFetch } from '@/app/utils/authFetch'

export const userService = {
  getUserInfo: async (email: string, type: UserType) => {
    const res = await authFetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/info/${type}`,
      {
        method: 'POST',
        body: JSON.stringify({ email }),
      },
    )

    return res
  },
}
