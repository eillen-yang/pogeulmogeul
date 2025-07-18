export const getApiEndpoint = (cateTYpe: string) => {
  if (cateTYpe.includes('model_doit'))
    return '/board/model/assistance'
  if (cateTYpe.includes('model_wantit')) return '/board/model/need'
  if (cateTYpe.includes('photographer_doit'))
    return '/board/pro-photo/assistance'
  if (cateTYpe.includes('photographer_wantit'))
    return '/board/pro-photo/need'
  if (cateTYpe.includes('photoshop')) return '/board/photo-shop'
  if (cateTYpe.includes('free')) return '/board/talent-donation'
  throw new Error(`❌ 유효하지 않은 cateType: ${cateTYpe}`)
}
