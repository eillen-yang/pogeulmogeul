export const getApiEndpoint = (pathname: string) => {
  if (pathname.includes('model_doit'))
    return '/board/model/assistance'
  if (pathname.includes('model_wantit')) return '/board/model/need'
  if (pathname.includes('photographer_doit'))
    return '/board/pro-photo/assistance'
  if (pathname.includes('photographer_wantit'))
    return '/board/pro-photo/need'
  if (pathname.includes('photoshop')) return '/board/photo-shop'
  if (pathname.includes('free')) return '/board/talent-donation'
  return '/'
}
