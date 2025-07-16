import { useQuery } from '@tanstack/react-query'
import { postService } from '../api/services/postService'

export const usePost = (
  postId: number,
  email: string,
  cateType: string,
) => {
  return useQuery({
    queryKey: ['post', postId, email],
    queryFn: () => postService.detail(postId, email, cateType),
    enabled: !!postId && !!email,
    staleTime: 1000 * 60 * 5,
  })
}
