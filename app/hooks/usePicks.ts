// hooks/usePickPosts.ts
import { useQuery } from '@tanstack/react-query'
import { postService } from '../api/services/postService'

export function usePickUsers() {
  return useQuery({
    queryKey: ['pick-posts'],
    queryFn: () => postService.getPickPosts(),
  })
}
