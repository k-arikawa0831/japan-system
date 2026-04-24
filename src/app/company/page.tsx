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
              <div className={styles.greetingPhotoImage} />
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
              <div className={`${styles.communityPhoto} ${styles.communityPhotoClock}`} />
              <h3>事務所前のアナログ時計</h3>
              <p>
                旧事務所の時代から、通りに面した場所にアナログ時計を設置しています。通勤・通学で前を通る方々に時間を届けたい。時計を見上げた時に、自然と空を見上げ、安全につながる。創業者と二代目社長の想いを込めた取り組みです。
              </p>
            </div>
            <div className={styles.communityCard}>
              <div className={`${styles.communityPhoto} ${styles.communityPhotoMarathon}`} />
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
            <div className={styles.mapPhoto}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1164.9379034561275!2d134.00350021175944!3d34.326497336972686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553e996e09b0af5%3A0xdb1601dc8c3e73f7!2z5pel5pys44K344K544OG44Og44K144O844OT44K5!5e0!3m2!1sja!2sjp!4v1776848911456!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="日本システムサービス 所在地"
              />
            </div>
            <div className={styles.mapInfo}>
              <dl>
                <dt>住所</dt>
                <dd>〒000-0000 香川県高松市○○町0-0-0</dd>
                <dt>最寄駅</dt>
                <dd>JR予讃線「○○駅」から徒歩○分</dd>
                <dt>駐車場</dt>
                <dd>あり（○台分）</dd>
                <dt>営業時間</dt>
                <dd>平日 8:30〜17:30</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      <ContactCTA />
    </>
  )
}
