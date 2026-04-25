import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import FadeIn from '@/components/FadeIn/FadeIn'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import WorksCard from '@/components/WorksCard/WorksCard'
import NewsCard from '@/components/NewsCard/NewsCard'
import { worksData } from '@/data/works'
import { newsData } from '@/data/news'
import styles from './page.module.scss'

const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="10" /><path d="M24 14V8M24 40v-6M14 24H8M40 24h-6M17 17l-4-4M35 35l-4-4M17 31l-4 4M35 13l-4 4" />
      </svg>
    ),
    title: '消防設備点検・保守',
    description: 'マンション・ビルの火災報知器やスプリンクラーなど、消防設備の定期点検から報告書作成・届出まで一括対応。',
    href: '/service#inspection',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 40V28h8v12M8 20l16-12 16 12M12 22v16a2 2 0 002 2h20a2 2 0 002-2V22" />
      </svg>
    ),
    title: '消防設備工事',
    description: '自動火災報知設備やスプリンクラーの新規設置から、既存設備の改修・更新工事まで。',
    href: '/service#construction',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 8v32M16 16l8-8 8 8M12 28h24M8 36h32" />
      </svg>
    ),
    title: '電気通信工事',
    description: '消防設備に伴う電気配線工事、非常放送設備、インターホン設備の施工。',
    href: '/service#electrical',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 40h12M24 40V26M19 8h10l2 18H17L19 8zM17 12h14" />
      </svg>
    ),
    title: '防災用品販売',
    description: '消火器の販売・交換、住宅用火災警報器の販売・取付など。',
    href: '/service#sales',
  },
]

const reasons = [
  {
    number: '01',
    title: '地域密着50年以上',
    description: '香川県高松市に拠点を置き、半世紀にわたって地域の建物の安全を守り続けてきました。創業から受け継がれる想いは、今も変わりません。',
  },
  {
    number: '02',
    title: '点検から工事まで\nワンストップ',
    description: '点検で見つかった不具合をそのまま改修工事まで対応可能。窓口が一つで済むため、管理会社様・オーナー様の手間を大幅に削減します。',
  },
  {
    number: '03',
    title: '有資格者による\n確かな技術',
    description: '消防設備士（甲種4類／乙種6類 等）・電気工事士の有資格者が在籍。法令に基づいた確実な点検・施工を行います。',
  },
]

const history = [
  {
    era: '1970s',
    heading: '創業',
    body: '香川・高松の地で、初代社長のもと消防設備業を創業。「一人でも多くの命を救う」を胸に、地域の安全を守る歩みがはじまりました。',
  },
  {
    era: '2020s',
    heading: '新社屋 NSビルへ',
    body: '想いを次世代へ継ぐため、新社屋へ移転。旧事務所で地域の小学生のために設置された時計は、父・叔父の判断で今も同じように、地域を見守り続けています。',
  },
  {
    era: 'NEXT',
    heading: '次の半世紀へ',
    body: '現場で育った人が、現場で繋いでいく。消防設備と電気通信の技術で、地域の“あたりまえの安全”を次の世代へ。',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn>
            <p className={styles.heroEn}>PROTECT &amp; CONNECT — SINCE 1970s</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className={styles.heroCatch}>
              守り、繋ぐ。<br />
              香川の&ldquo;あたりまえ&rdquo;を、半世紀。
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className={styles.heroSub}>
              消防設備の点検・工事、電気通信工事。<br className={styles.pcBr} />
              半世紀にわたり、人と建物の安全を繋いできました。
            </p>
          </FadeIn>
          <FadeIn delay={600}>
            <div className={styles.heroActions}>
              <Link href="/service" className={styles.heroBtn}>
                事業内容を見る
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className={styles.heroBtnOutline}>
                お問い合わせ
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className={styles.heroScroll}>
          <span>SCROLL</span>
          <div className={styles.heroScrollLine} />
        </div>
      </section>

      {/* Message */}
      <section className={styles.message}>
        <div className={styles.inner}>
          <FadeIn>
            <p className={styles.messageText}>
              私たちは、建物に設置された消防設備の<br className={styles.pcBr} />
              <strong>点検・工事・電気通信</strong>を通じて、<br className={styles.pcBr} />
              地域の安全を守り、人と人、設備と設備を繋ぐ専門家集団です。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Connect — 守る・繋ぐ */}
      <section className={styles.connect}>
        <div className={styles.connectOverlay} />
        <div className={styles.connectInner}>
          <FadeIn>
            <p className={styles.connectEn}>PROTECT &amp; CONNECT</p>
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className={styles.connectHeading}>
              守る、そして繋ぐ。
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <p className={styles.connectBody}>
              消防設備の点検で、建物と人の安全を&ldquo;守る&rdquo;。<br />
              電気通信と工事で、設備と設備、そして人と人を&ldquo;繋ぐ&rdquo;。<br />
              この二つが、日本システムサービスの仕事です。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service */}
      <section className={styles.service}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionTitle en="SERVICE" ja="事業内容" />
          </FadeIn>
          <div className={styles.serviceGrid}>
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 100}>
                <Link href={s.href} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.description}</p>
                  <span className={styles.serviceMore}>詳しく見る →</span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reason */}
      <section className={styles.reason}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionTitle en="REASON" ja="選ばれる理由" color="light" />
          </FadeIn>
          <div className={styles.reasonGrid}>
            {reasons.map((r, i) => (
              <FadeIn key={r.number} delay={i * 150}>
                <div className={styles.reasonCard}>
                  <span className={styles.reasonNumber}>{r.number}</span>
                  <h3 className={styles.reasonTitle}>
                    {r.title.split('\n').map((line, j) => (
                      <span key={j}>{line}{j === 0 && r.title.includes('\n') && <br />}</span>
                    ))}
                  </h3>
                  <p className={styles.reasonDesc}>{r.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* History — 50年の歩み */}
      <section className={styles.history}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionTitle en="HISTORY" ja="50年の歩み" />
          </FadeIn>
          <div className={styles.historyTimeline}>
            {history.map((h, i) => (
              <FadeIn key={h.era} delay={i * 150}>
                <div className={styles.historyStep}>
                  <span className={styles.historyEra}>{h.era}</span>
                  <h3 className={styles.historyHeading}>{h.heading}</h3>
                  <p className={styles.historyBody}>{h.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className={styles.moreLink}>
              <Link href="/company">
                会社概要を見る
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Works Pickup */}
      <section className={styles.works}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionTitle en="WORKS" ja="実績紹介" />
          </FadeIn>
          <FadeIn>
            <div className={styles.worksGrid}>
              {worksData.slice(0, 3).map((w) => (
                <WorksCard key={w.id} item={w} />
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <div className={styles.moreLink}>
              <Link href="/works">
                実績一覧を見る
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* News */}
      <section className={styles.news}>
        <div className={styles.inner}>
          <FadeIn>
            <SectionTitle en="NEWS" ja="お知らせ" />
          </FadeIn>
          <FadeIn>
            <ul className={styles.newsList}>
              {newsData.slice(0, 5).map((n) => (
                <NewsCard key={n.id} item={n} />
              ))}
            </ul>
          </FadeIn>
          <FadeIn>
            <div className={styles.moreLink}>
              <Link href="/news">
                お知らせ一覧を見る
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Recruit Banner */}
      <section className={styles.recruitBanner}>
        <div className={styles.recruitOverlay} />
        <div className={styles.recruitContent}>
          <FadeIn>
            <span className={styles.recruitEn}>RECRUIT</span>
            <h2 className={styles.recruitTitle}>
              現場で育ち、<br />現場で繋ぐ。
            </h2>
            <p className={styles.recruitText}>
              消防設備の仕事は、命を預かる仕事。<br />
              未経験からでも一人前の技術者へ、資格取得もサポートします。
            </p>
            <Link href="/recruit" className={styles.recruitBtn}>
              採用情報を見る
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </>
  )
}
