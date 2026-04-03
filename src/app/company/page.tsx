import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader/PageHeader'
import FadeIn from '@/components/FadeIn/FadeIn'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: '会社概要',
  description: '日本システムサービスの会社概要。代表挨拶、会社情報、地域貢献活動、アクセスをご紹介します。',
}

const companyInfo = [
  { label: '会社名', value: '日本システムサービス株式会社' },
  { label: '所在地', value: '〒000-0000 香川県高松市○○町0-0-0' },
  { label: 'TEL', value: '000-000-0000' },
  { label: 'FAX', value: '000-000-0000' },
  { label: '代表者', value: '代表取締役 ○○ ○○' },
  { label: '設立', value: '○○年' },
  { label: '資本金', value: '○○万円' },
  { label: '従業員数', value: '○名' },
  { label: '事業内容', value: '消防設備点検・保守、消防設備工事、電気通信工事、防災用品販売' },
  { label: '許可・資格', value: '消防施設工事業（香川県知事許可 第○○号）\n電気工事業' },
  { label: '対応エリア', value: '香川県全域（高松市・丸亀市 他）' },
]

export default function CompanyPage() {
  return (
    <>
      <PageHeader en="COMPANY" ja="会社概要" />

      {/* 代表挨拶 */}
      <FadeIn>
      <section className={styles.greeting}>
        <div className={styles.inner}>
          <h2 className={styles.greetingTitle}>
            受け継いだ想いを、次の時代へ。
          </h2>
          <div className={styles.greetingContent}>
            <div className={styles.greetingPhoto}>
              <div className={styles.placeholder}>代表者写真</div>
            </div>
            <div className={styles.greetingText}>
              <p>
                当社は、先代が「地域の建物の安全を守りたい」という想いで創業し、私が二代目として事業を引き継ぎました。
              </p>
              <p>
                消防設備の仕事は、普段は目立たないかもしれません。しかし、いざという時に人の命を守る、なくてはならない仕事です。一つひとつの点検、一つひとつの工事に真摯に向き合い、建物の安全を確実に守ること。それが私たちの使命だと考えています。
              </p>
              <p>
                事務所の前に設置しているアナログ時計は、旧事務所の時代から続けている取り組みです。通勤・通学で通る方々に時間を届けたい。時計を見上げた時に青空が見える。そんな小さなことから、地域とつながっていたい。この気持ちは、消防設備の仕事にも通じています。
              </p>
              <p>
                これからも地域の安全と安心に貢献できる企業であり続けるために、社員一同、技術の向上と誠実な仕事を積み重ねてまいります。
              </p>
              <p className={styles.sign}>代表取締役 ○○ ○○</p>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* 会社情報 */}
      <FadeIn>
      <section className={styles.info}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>会社情報</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <tbody>
                {companyInfo.map((row) => (
                  <tr key={row.label}>
                    <th>{row.label}</th>
                    <td>{row.value.split('\n').map((line, i) => (
                      <span key={i}>{line}{i < row.value.split('\n').length - 1 && <br />}</span>
                    ))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* 保有資格 */}
      <FadeIn>
      <section className={styles.qualifications}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>保有資格</h2>
          <ul className={styles.qualList}>
            <li>消防設備士（甲種・乙種）</li>
            <li>電気工事士</li>
            <li>消防設備点検資格者</li>
          </ul>
        </div>
      </section>
      </FadeIn>

      {/* 地域貢献活動 */}
      <FadeIn>
      <section className={styles.community}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>地域貢献活動</h2>
          <div className={styles.communityGrid}>
            <div className={styles.communityCard}>
              <div className={styles.communityPhoto}>
                <div className={styles.placeholder}>時計の写真</div>
              </div>
              <h3>事務所前のアナログ時計</h3>
              <p>
                旧事務所の時代から、通りに面した場所にアナログ時計を設置しています。通勤・通学で前を通る方々に時間を届けたい。時計を見上げた時に、自然と空を見上げ、安全につながる。創業者と二代目社長の想いを込めた取り組みです。
              </p>
            </div>
            <div className={styles.communityCard}>
              <div className={styles.communityPhoto}>
                <div className={styles.placeholder}>マラソンの写真</div>
              </div>
              <h3>かがわマラソンへの参加</h3>
              <p>
                かがわマラソンに救護班として参加。1万人を超えるランナーの安全を消防設備業者として支えています。これからも消防設備業者として「安心」を届ける企業として、地域の活動に積極的に貢献してまいります。
              </p>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* アクセス */}
      <FadeIn>
      <section className={styles.access}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>アクセス</h2>
          <div className={styles.map}>
            <div className={styles.mapPlaceholder}>
              Google Map（住所確定後に埋め込み）
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      <ContactCTA />
    </>
  )
}
