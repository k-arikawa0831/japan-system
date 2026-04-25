import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader/PageHeader'
import FadeIn from '@/components/FadeIn/FadeIn'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: '会社概要',
  description: '日本システムサービスの会社概要。代表挨拶、私たちの想い、時計にまつわるエピソード、会社情報、地域貢献活動、アクセスをご紹介します。',
}

const companyInfo = [
  { label: '会社名', value: '日本システムサービス株式会社' },
  { label: '所在地', value: '〒000-0000 香川県高松市鶴尾 NSビル【番地 要確認】' },
  { label: 'TEL', value: '000-000-0000【要確認】' },
  { label: 'FAX', value: '000-000-0000【要確認】' },
  { label: '代表者', value: '代表取締役【氏名 要確認】' },
  { label: '設立', value: '1970年代【正確な設立年 要確認】' },
  { label: '資本金', value: '【要確認】' },
  { label: '従業員数', value: '約30名（役員3名含む）' },
  { label: '事業内容', value: '消防設備点検・保守、消防設備工事、電気通信工事、防災用品販売' },
  { label: '許可・資格', value: '消防施設工事業（香川県知事許可 第○○号）【要確認】\n電気工事業' },
  { label: '対応エリア', value: '香川県全域（高松市・丸亀市 他）／公共施設の入札も多数対応' },
]

export default function CompanyPage() {
  return (
    <>
      <PageHeader en="COMPANY" ja="会社概要" />

      {/* 私たちの想い（理念） */}
      <FadeIn>
      <section className={styles.philosophy}>
        <div className={styles.inner}>
          <p className={styles.philosophyEn}>OUR PHILOSOPHY</p>
          <h2 className={styles.philosophyHeading}>
            一人でも多くの命を救う。
          </h2>
          <div className={styles.philosophyBody}>
            <p>
              これは、当社の代表取締役と専務が、それぞれ別々に胸に秘めてきた想いでした。
            </p>
            <p>
              あるとき社内の SNS 研修で「そもそも私たちの理念とは何か」を問い直したところ、二人の言葉は驚くほど重なっていました。<br />
              火災が起きた後に駆けつけるのが消防なら、火災を起こさせないのが、私たち消防設備の仕事。設備と設備、人と人を確実に繋ぎ、いかに早く伝えられるかで、救える命の数が変わります。
            </p>
            <p>
              半世紀、現場の中で自然と受け継がれてきた想いが、ようやく一つの言葉になりました。<br />
              <strong>「一人でも多くの命を救う。」</strong><br />
              これが、日本システムサービスの出発点であり、未来へ向かう羅針盤です。
            </p>
          </div>
        </div>
      </section>
      </FadeIn>

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
                当社は1970年代、香川・高松の地で祖父が創業し、父と叔父が二代目として事業を引き継ぎ、半世紀にわたって地域の建物の安全を守ってまいりました。
              </p>
              <p>
                消防設備の仕事は、普段は目立たないかもしれません。しかし、いざという時に人の命を守る、なくてはならない仕事です。点検で&ldquo;守り&rdquo;、工事・電気通信で&ldquo;繋ぐ&rdquo;。一つひとつの現場に真摯に向き合い、建物と、そこで暮らす人の安全を確実に守ること。それが私たちの使命だと考えています。
              </p>
              <p>
                ここ数年、売上の拡大とともに保守点検の件数も増え、作業員の増員が急務となっています。現場で育ち、現場で提案できる若手を大切に育てながら、私たちは次の半世紀に向けて、体制と技術の両面で歩みを進めています。
              </p>
              <p>
                「一人でも多くの命を救う」という想いを胸に、これからも地域の安全と安心に貢献できる企業であり続けるために、社員一同、技術の向上と誠実な仕事を積み重ねてまいります。
              </p>
              <p className={styles.sign}>代表取締役【要確認】</p>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* 時計エピソード */}
      <FadeIn>
      <section className={styles.story}>
        <div className={styles.inner}>
          <div className={styles.storyGrid}>
            <div className={styles.storyPhoto}>
              <div className={styles.storyPhotoImage} />
            </div>
            <div className={styles.storyText}>
              <p className={styles.storyEn}>STORY</p>
              <h2 className={styles.storyHeading}>
                小さな時計と、地域への約束。
              </h2>
              <p>
                創業者である初代社長の旧事務所の前には、通りに面して小さなアナログ時計が設置されていました。
              </p>
              <p>
                きっかけは、通学途中の小学生たち。「今、何時ですか？」と事務所に時間を尋ねに来る子どもがあまりに多く、それなら時計をつけてしまおう、と。小さな気遣いが形になったものでした。
              </p>
              <p>
                事務所を壊して今の新社屋（NSビル）へ移転する際、父と叔父は迷いませんでした。「時計も、もう一度設置しよう」と。半世紀前の地域への想いが、今も同じ場所から、同じように時を刻んでいます。
              </p>
              <p>
                私たちが守りたいのは、建物の安全だけではありません。時計が見上げる空と、そこに暮らす一人ひとりの&ldquo;あたりまえ&rdquo;です。
              </p>
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
            <li>消防設備士（甲種4類／乙種6類 ほか）</li>
            <li>消防設備点検資格者</li>
            <li>電気工事士</li>
            <li>電気通信工事関連資格</li>
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
              <div className={`${styles.communityPhoto} ${styles.communityPhotoMarathon}`} />
              <h3>かがわマラソンへの参加</h3>
              <p>
                地域のマラソン大会に救護対応として参加。消防設備業者としての知見を活かし、地域の大規模イベントの安全運営に貢献しています。
              </p>
            </div>
            <div className={styles.communityCard}>
              <div className={`${styles.communityPhoto} ${styles.communityPhotoClock}`} />
              <h3>事務所前のアナログ時計</h3>
              <p>
                創業者が旧事務所の時代から設置してきたアナログ時計。新社屋 NSビルへの移転時も、想いとともに継承・再設置。通勤・通学の方々の日常のひとこまを、今も見守り続けています。
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
                <dd>〒000-0000 香川県高松市鶴尾 NSビル【番地 要確認】</dd>
                <dt>最寄駅</dt>
                <dd>JR予讃線より徒歩圏内【詳細 要確認】</dd>
                <dt>駐車場</dt>
                <dd>あり（台数 要確認）</dd>
                <dt>営業時間</dt>
                <dd>平日 8:30〜17:30【要確認】</dd>
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
