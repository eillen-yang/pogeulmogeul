type UserType = '회원' | '일반회원' | '모델회원' | '사진기사회원'

export const mapUserTypeToLabel = (
  type: string,
): 'all' | 'basic' | 'model' | 'pro-photo' => {
  switch (type) {
    case '일반회원':
      return 'basic'
    case '모델회원':
      return 'model'
    case '사진기사회원':
      return 'pro-photo'
    default:
      return 'all'
  }
}
