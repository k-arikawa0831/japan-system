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
  { label: '所在地', value: '〒761-8032 香川県高松市鶴市町160-1 NSビル' },
  { label: 'TEL', value: '087-882-3303' },
  { label: 'FAX', value: '087-881-2192' },
  { label: '代表者', value: '代表取締役社長　池尻 数馬' },
  { label: '役員', value: '代表取締役社長 池尻 数馬\n代表取締役専務 池尻 雄一郎\n取締役 宇山 孝志' },
  { label: '創業', value: '昭和49年(1974年)7月24日' },
  { label: '設立', value: '昭和49年(1974年)7月24日' },
  { label: '資本金', value: '1,000万円' },
  { label: '従業員数', value: '25名' },
  { label: '取引銀行', value: '百十四銀行、香川銀行' },
  { label: '事業内容', value: '消防設備点検・保守、消防設備工事、防火設備検査、防火・防災定期点検、電気通信工事、防災用品販売' },
  { label: '建設業許可', value: '香川県知事許可（般-3）第3164号（令和3年5月26日〜令和8年5月25日）\n消防施設工事業／電気通信工事業' },
  { label: '営業時間', value: '平日 8:15〜17:30 ／ 土曜 8:15〜17:00' },
  { label: '定休日', value: '日・祝・その他会社指定日' },
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
                当社は昭和49年（1974年）、香川・高松の地で先代社長が「地域の建物の安全を守りたい」という想いで創業しました。以来、半世紀にわたり、マンション・ビル・公共施設・商業施設など、さまざまな建物の消防設備を支え続けてまいりました。
              </p>
              <p>
                消防設備の仕事は、普段は目立たないかもしれません。しかし、いざという時に人の命を守る、なくてはならない仕事です。点検で&ldquo;守り&rdquo;、工事・電気通信で&ldquo;繋ぐ&rdquo;。一つひとつの現場に真摯に向き合い、建物と、そこで暮らす人の安全を確実に守ること。それが私たちの使命だと考えています。
              </p>
              <p>
                ここ数年、保守点検の件数は年間約1,600物件まで広がり、それを支える人材の育成が事業の中心テーマとなっています。現場で育ち、現場で提案できる若手を大切に育てながら、私たちは次の半世紀に向けて、体制と技術の両面で歩みを進めています。
              </p>
              <p>
                「一人でも多くの命を救う」という想いを胸に、これからも地域の安全と安心に貢献できる企業であり続けるために、社員一同、技術の向上と誠実な仕事を積み重ねてまいります。
              </p>
              <p className={styles.sign}>代表取締役社長　池尻 数馬</p>
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
          <p className={styles.qualLead}>
            消防設備士・電気工事士など、確実な点検・施工に必要な国家資格を社内で多数保有しています。
          </p>
          <dl className={styles.qualGroups}>
            <div className={styles.qualGroup}>
              <dt>消防設備士</dt>
              <dd>
                <span>甲種特類：2名</span>
                <span>甲種1類：6名</span>
                <span>甲種2類：5名</span>
                <span>甲種3類：6名</span>
                <span>甲種4類：11名</span>
                <span>甲種5類：5名</span>
                <span>乙種6類：12名</span>
              </dd>
            </div>
            <div className={styles.qualGroup}>
              <dt>消防設備点検資格者</dt>
              <dd>
                <span>第1種：17名</span>
                <span>第2種：15名</span>
              </dd>
            </div>
            <div className={styles.qualGroup}>
              <dt>電気工事士</dt>
              <dd>
                <span>第一種：2名</span>
                <span>第二種：8名</span>
              </dd>
            </div>
          </dl>
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
                創業者が旧事務所の時代から設置してきたアナログ時計。新社屋 NSビルへの移転時も、想いとともに継承・再設置。通勤・通学の方々の日常のひとこまを、今も見守り続けています。
              </p>
            </div>
            <div className={styles.communityCard}>
              <div className={`${styles.communityPhoto} ${styles.communityPhotoMarathon}`} />
              <h3>かがわマラソンへの参加</h3>
              <p>
                地域のマラソン大会に救護対応として参加。消防設備業者としての知見を活かし、地域の大規模イベントの安全運営に貢献しています。
              </p>
            </div>
            <div className={styles.communityCard}>
              <div className={`${styles.communityPhoto} ${styles.communityPhotoSos}`} />
              <h3>子供SOS活動への協力</h3>
              <p>
                地域の子どもたちが安心して登下校できるよう、事務所を「子供110番／子供SOS」の駆け込み先として開放しています。地域の小さな見守り役のひとつとして、半世紀続く取り組みを大切にしています。
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.55!2d134.0041454!3d34.3264647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553e9006a0fc60b%3A0x3b3333604e79e1c6!2z5pel5pys44K344K544OG44Og44K144O844OT44K5!5e0!3m2!1sja!2sjp!4v1747000000000!5m2!1sja!2sjp"
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
                <dd>〒761-8032 香川県高松市鶴市町160-1 NSビル</dd>
                <dt>最寄駅</dt>
                <dd>JR予讃線 香西駅 徒歩30分</dd>
                <dt>駐車場</dt>
                <dd>あり（約30台）</dd>
                <dt>営業時間</dt>
                <dd>平日 8:15〜17:30 ／ 土曜 8:15〜17:00</dd>
                <dt>TEL / FAX</dt>
                <dd><a href="tel:0878823303">087-882-3303</a> ／ FAX: 087-881-2192</dd>
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
