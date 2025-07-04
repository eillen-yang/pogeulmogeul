export type TitleKey =
  | 'model_doit'
  | 'model_wantit'
  | 'photographer_doit'
  | 'photographer_wantit'
  | 'photoshop'
  | 'free'

export const TITLE_MAP: Record<
  TitleKey,
  {
    prefix?: string
    highlight?: string
    suffix?: string
  }
> = {
  model_doit: {
    prefix: '해줄게요!',
    highlight: '모델이 ',
  },
  model_wantit: {
    prefix: '필요해요!',
    highlight: '모델이 ',
  },
  photographer_doit: {
    prefix: '해줄게요!',
    highlight: '사진작가가 ',
  },
  photographer_wantit: {
    prefix: '필요해요!',
    highlight: '사진작가가 ',
  },
  photoshop: {
    highlight: '포토샵 능력자! ',
    prefix: '해줄게 & 필요해',
  },
  free: {
    highlight: '포글모글에서, ',
    prefix: '재능기부',
    suffix: '합니다!',
  },
} as const
