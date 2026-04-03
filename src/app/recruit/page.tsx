import type { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn/FadeIn'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: '採用情報',
  description: '日本システムサービスの採用情報。未経験歓迎、資格取得支援あり。消防設備技術者を募集しています。',
}

const appeals = [
  { icon: '🎓', title: '手に職がつく', text: '消防設備士や電気工事士など、国家資格の取得を支援。一生モノの技術が身につきます。' },
  { icon: '📈', title: '安定した需要', text: '消防設備の点検は法律で義務化されているため、景気に左右されにくい安定した業界です。' },
  { icon: '🏘️', title: '地域に貢献できる', text: '自分の仕事が、地域の人たちの命と安全を守ることにつながっています。' },
  { icon: '🤝', title: 'チームワークを大切に', text: 'マラソン大会の救護参加など、仕事以外でもチームの絆を深めています。' },
]

const requirements = [
  { label: '仕事内容', value: 'マンション・ビル等の消防設備の点検・工事、報告書作成、消防届出補助' },
  { label: '応募資格', value: '普通自動車免許（AT限定可）、学歴不問、未経験歓迎' },
  { label: '歓迎資格', value: '消防設備士、電気工事士（入社後の取得支援あり）' },
  { label: '給与', value: '月給 ○○万円〜○○万円（経験・資格による）' },
  { label: '昇給・賞与', value: '昇給：年1回、賞与：年2回' },
  { label: '勤務時間', value: '8:30〜17:30（休憩60分）' },
  { label: '休日', value: '土日祝、夏季休暇、年末年始休暇、有給休暇' },
  { label: '福利厚生', value: '社会保険完備、資格取得支援制度、作業着貸与、車通勤可' },
  { label: '勤務地', value: '香川県高松市○○町0-0-0' },
]

const steps = [
  { year: '入社1年目', desc: '現場同行・基礎研修 → 点検補助からスタート' },
  { year: '入社2〜3年目', desc: '消防設備士（乙種）取得 → 一人で点検業務を担当' },
  { year: '入社4〜5年目', desc: '消防設備士（甲種）取得 → 工事案件も担当' },
  { year: '入社6年目〜', desc: '現場リーダー → 後輩の指導・案件管理' },
]

export default function RecruitPage() {
  return (
    <>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.recruitEn}>RECRUIT</span>
          <h1 className={styles.recruitJa}>採用情報</h1>
          <h2 className={styles.heroMessage}>
            未経験から、地域の安全を守るプロへ。
          </h2>
          <p className={styles.heroText}>
            消防設備の点検・工事と聞くと、専門的で難しそうに感じるかもしれません。
            でも、当社の社員のほとんどが未経験からスタートしています。
            先輩社員が現場で丁寧に指導し、資格取得も会社が全面的にバックアップ。
            一歩ずつ着実に成長できる環境があります。
          </p>
        </div>
      </div>

      {/* 魅力 */}
      <FadeIn>
      <section className={styles.appeal}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>当社で働く魅力</h2>
          <div className={styles.appealGrid}>
            {appeals.map((a) => (
              <div key={a.title} className={styles.appealCard}>
                <span className={styles.appealIcon}>{a.icon}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* 募集要項 */}
      <FadeIn>
      <section className={styles.requirements}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>募集要項</h2>
          <h3 className={styles.jobTitle}>消防設備技術者（点検・工事スタッフ）</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <tbody>
                {requirements.map((r) => (
                  <tr key={r.label}>
                    <th>{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* キャリアステップ */}
      <FadeIn>
      <section className={styles.career}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>キャリアステップ</h2>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.year} className={styles.step}>
                <div className={styles.stepDot} />
                {i < steps.length - 1 && <div className={styles.stepLine} />}
                <div className={styles.stepContent}>
                  <span className={styles.stepYear}>{s.year}</span>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      {/* 応募方法 */}
      <FadeIn>
      <section className={styles.apply}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>応募方法</h2>
          <p className={styles.applyText}>
            下記お問い合わせフォームから「採用について」を選択のうえ、ご連絡ください。<br />
            履歴書は面接時にご持参いただければ結構です。<br />
            まずはお気軽にご相談ください。見学のみも歓迎です。
          </p>
          <Link href="/contact" className={styles.applyButton}>
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
      </FadeIn>

      <ContactCTA />
    </>
  )
}
