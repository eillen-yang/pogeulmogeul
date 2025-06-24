import Link from 'next/link'

export default function Sidebar() {
  return (
    <section>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <Link href={'/'}>
                  <span>❤️ 포글모글 추천</span>
                </Link>
              </li>
              <li>
                <span>💎 모델</span>
                <ul>
                  <li>
                    <Link href={'/post/model_wantit'}>
                      <span>모델 필요해</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/post/model_doit'}>
                      <span>모델 해줄게</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>📸 사진 촬영</span>
                <ul>
                  <li>
                    <Link href={'/post/photographer_wantit'}>
                      <span>사진작가 필요해</span>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/post/photographer_doit'}>
                      <span>사진작가 해줄게</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={'/post/photoshop'}>
                  <span>🎨 포토샵</span>
                </Link>
              </li>
              <li>
                <Link href={'/post/free'}>
                  <span>✨ 재능기부</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <button></button>
          </div>
        </div>
      </div>
    </section>
  )
}
