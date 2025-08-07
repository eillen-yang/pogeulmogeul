import { useCheckStore } from '../stores/checkStore'

export const useCheckDuplication = () => {
  const { setEmailChecked, setNicknameChecked } = useCheckStore()

  const checkEmail = async (email: string) => {
    if (!email) return '이메일을 입력해주세요.'

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!emailRegex.test(email))
      return '이메일 형식이 올바르지 않습니다.'

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/duplicate/email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        },
      )
      const data = await res.json()

      if (data.message && data.message.includes('이미 존재')) {
        setEmailChecked(false)
        return '이미 사용 중인 이메일입니다.'
      } else {
        setEmailChecked(true)
        return '사용 가능한 이메일입니다.'
      }
    } catch (err) {
      return '중복 검사 중 오류가 발생했습니다.'
    }
  }

  const checkNickname = async (nickname: string) => {
    if (!nickname) return '닉네임을 입력해주세요.'
    if (nickname.length < 2) return '닉네임은 2자 이상이어야 합니다.'

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/duplicate/name`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: nickname.trim(),
          }),
        },
      )

      const data = await res.json()

      if (data.message && data.message.includes('이미 존재')) {
        setNicknameChecked(false)
        return '이미 사용 중인 닉네임입니다.'
      } else {
        setNicknameChecked(true)
        return '사용 가능한 닉네임입니다.'
      }
    } catch (err) {
      return '중복 검사 중 오류가 발생했습니다.'
    }
  }
  return { checkEmail, checkNickname }
}
