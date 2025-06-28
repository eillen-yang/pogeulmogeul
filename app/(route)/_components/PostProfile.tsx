import { faker } from '@faker-js/faker'
import Image from 'next/image'
import Link from 'next/link'
import dummy from '@/public/dummy.svg'
import background from '@/public/sample.jpg'
import catting from '@/public/icon/white_talk.svg'
import calendar from '@/public/icon/gray_calendar.svg'
import heart from '@/public/icon/profile_heart.svg'

export default function PostProfile() {
  return (
    <div>
      <Image
        className="border boder-[var(--color-1)] rounded-3xl"
        height={560}
        src={background}
        alt="프로필 배경 이미지"
      />
      <div className="relative px-5">
        <div className="pb-10 border-[var(--color-8)] border-b">
          <div className="flex flex-col gap-4 absolute left-1/6 top-0 -translate-x-1/2 -translate-y-1/2">
            <Image
              width={80}
              height={80}
              src={dummy}
              alt="내 프로필"
            />
            <div className="flex items-start justify-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">닉네임</span>
                <span className="text-lg text-[var(--color-6)] font-medium">
                  일반회원
                </span>
              </div>
              <button>
                <Image
                  width={20}
                  height={20}
                  src={heart}
                  alt="좋아요"
                />
              </button>
            </div>
          </div>
          <div className="pl-48 mt-8 flex flex-col gap-3">
            <Link
              href={'/calendar'}
              className="flex items-center justify-center gap-1.5 h-14 bg-[var(--color-1)] text-[var(--color-8)] font-bold text-xl rounded-xl"
            >
              <Image
                width={12}
                height={12}
                src={calendar}
                alt="캘린더 보기"
              />
              <span>캘린더 보기</span>
            </Link>
            <Link
              href={'/chat'}
              className="flex items-center justify-center gap-1.5 h-14 bg-[var(--main-color)] text-[var(--color-1)] font-bold text-xl rounded-xl"
            >
              <Image
                width={12}
                height={12}
                src={catting}
                alt="제안하기"
              />
              <span>제안하기</span>
            </Link>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col gap-2">
            <span className="text-lg text-[var(--color-4)] font-medium">
              2024.03.24 14:00
            </span>
            <p className="text-2xl font-bold">
              야외 컨셉 촬영, 피팅, 쇼핑몰 등 (얼굴노출O) 모델
              해드립니다!!
            </p>
            <div>
              <strong className="text-[var(--red-color)] text-2xl">
                300,000
              </strong>
              <span className="text-lg text-[var(--color-4)] font-medium">
                원
              </span>
            </div>
          </div>
          <div className="pt-10 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex py-4 px-5 rounded-2xl border border-[var(--color-1)]">
                <span className="flex-1 text-lg font-bold">
                  카테고리
                </span>
                <p className="flex-3/5 text-lg font-normal">
                  얼굴, 전신, 기타
                </p>
              </div>
              <div className="flex py-4 px-5 rounded-2xl border border-[var(--color-1)]">
                <span className="flex-1 text-lg font-bold">
                  날짜/시간
                </span>
                <p className="flex-3/5 text-lg font-normal">
                  2024.03.13. 금요일 오후 12:00 ~ 2024.03.13. 금요일
                  오후 01:00
                </p>
              </div>
              <div className="flex py-4 px-5 rounded-2xl border border-[var(--color-1)]">
                <span className="flex-1 text-lg font-bold">지역</span>
                <p className="flex-3/5 text-lg font-normal">
                  서울시 강남구
                </p>
              </div>
            </div>

            <div className="py-4 px-5 rounded-2xl border border-[var(--color-1)]">
              <span className="text-lg font-bold">상세내용</span>
              <p className="pt-3 text-lg font-normal">
                안녕하세요 A컴퍼니 입니다. 모델/피팅/룩북/쇼핑몰 모델
                진행 가능합니다. 촬영은 1시간부터 가능하고 장시간
                촬영도 가능합니다 자연스러운 헤어/메이크업 가능합니다.
                그 외에 협의 사항도 전달 주시면 협의 가능합니다.
                채팅주세요 감사합니다! 모델/피팅/룩북/쇼핑몰 모델 진행
                가능합니다. 촬영은 1시간부터 가능하고 장시간 촬영도
                가능합니다 자연스러운 헤어/메이크업 가능합니다. 그
                외에 협의 사항도 전달 주시면 협의 가능합니다.
                채팅주세요 감사합니다! 모델/피팅/룩북/쇼핑몰 모델 진행
                가능합니다. 노출 촬영은 죄송하지만 안하고있습니다!
                좋은 기회가 되어 많은 촬영을 할 수 있다면
                좋겠습니다감사합니다!!ㅎㅎ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
