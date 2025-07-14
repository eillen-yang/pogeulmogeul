import { useQuery } from '@tanstack/react-query'
import { Post, PostList } from '../types/Post'
import { postService } from '../api/services/postService'

export function usePosts(pathname: string) {
  return useQuery<PostList[], Error>({
    queryKey: ['posts', pathname],
    queryFn: () => postService.read(pathname),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  })
}
