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
    title: '地域密着20年以上',
    description: '香川県高松市に拠点を置き、地元の建物の安全を守り続けています。地域のイベントへの参加や、事務所前の時計設置など、地域とのつながりを大切にしています。',
  },
  {
    number: '02',
    title: '点検から工事まで\nワンストップ',
    description: '点検で見つかった不具合をそのまま改修工事まで対応可能。窓口が一つで済むため、管理会社様・オーナー様の手間を大幅に削減します。',
  },
  {
    number: '03',
    title: '有資格者による\n確かな技術',
    description: '消防設備士・電気工事士の有資格者が在籍。法令に基づいた確実な点検・施工を行います。',
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
            <p className={styles.heroEn}>PROTECT THE SAFETY</p>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className={styles.heroCatch}>
              地域の&ldquo;あたりまえの安全&rdquo;を、<br />
              確かな技術で守り続ける。
            </h1>
          </FadeIn>
          <FadeIn delay={400}>
            <p className={styles.heroSub}>
              香川県を中心に、消防設備の点検・工事・防災用品の販売を行っています。
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
              <strong>点検・工事・保守</strong>を通じて、<br className={styles.pcBr} />
              地域の安全を守る専門家集団です。
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
              一緒に、地域の安全を<br />守りませんか？
            </h2>
            <p className={styles.recruitText}>
              未経験からでも一人前の技術者へ。<br />
              資格取得も全力でサポートします。
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
