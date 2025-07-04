'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AGREEMENTS = [
  { label: '개인정보처리방침', key: 'privacy', required: true },
  { label: '이용약관', key: 'terms', required: true },
  {
    label: '마케팅 활용 동의(선택)',
    key: 'marketing',
    required: false,
  },
]

export default function ConditionsForm() {
  const router = useRouter()
  const [agreements, setAgreements] = useState({
    privacy: false,
    terms: false,
    marketing: false,
  })

  const handleToggle = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreements.privacy || !agreements.terms) {
      alert('필수 약관에 동의해주세요.')
      return
    }
    router.replace('/auth/signup/step02')
  }

  const isRequiredChecked = agreements.privacy && agreements.terms

  return (
    <form className="w-full">
      {AGREEMENTS.map(({ label, key, required }) => (
        <div
          key={key}
          className="mb-10 text-left space-y-2"
        >
          <div className="flex justify-between items-center text-lg font-medium">
            <span>
              {label}
              {required ? '(필수)' : '(선택)'}
            </span>
            <button
              type="button"
              className="text-gray-400 text-sm"
            >
              약관 전체보기 &gt;
            </button>
          </div>
          {/* 숨겨진 체크박스 */}
          <input
            type="checkbox"
            id={key}
            checked={agreements[key as keyof typeof agreements]}
            onChange={() =>
              handleToggle(key as keyof typeof agreements)
            }
            className="hidden"
          />
          {/* 커스텀 체크버튼 */}
          <label
            htmlFor={key}
            className={clsx(
              'block w-full text-2xl text-white text-center py-5 font-semibold rounded-lg cursor-pointer transition',
              agreements[key as keyof typeof agreements]
                ? 'bg-[var(--main-color)]'
                : 'bg-indigo-300',
            )}
          >
            동의합니다.
          </label>
        </div>
      ))}
      <button
        onClick={handleNextStep}
        type="submit"
        className={clsx(
          'block w-full text-2xl text-white text-center py-5 rounded-4xl cursor-pointer transition',
          isRequiredChecked
            ? 'bg-[var(--main-color)] hover:bg-indigo-800'
            : 'bg-gray-300 cursor-not-allowed',
        )}
      >
        다음
      </button>
    </form>
  )
}
