import { useAuthStore } from '../stores/authStore'

export const authFetch = async (
  url: string,
  options: RequestInit = {},
): Promise<any> => {
  const token = useAuthStore.getState().token

  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || '요청 실패')
  }

  return res.json()
}
