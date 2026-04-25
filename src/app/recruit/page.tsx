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
  { icon: '🎓', title: '資格取得を会社が全力支援', text: '消防設備士（甲種4類／乙種6類 ほか）、電気工事士。現場で評価される国家資格の取得を、費用面から学習時間まで会社がサポートします。' },
  { icon: '📈', title: '景気に左右されない需要', text: '消防設備の点検は消防法で義務づけられています。創業50年以上、安定した需要と公共入札案件に支えられた業界です。' },
  { icon: '🏘️', title: '地域の命を守る仕事', text: '私たちの理念は「一人でも多くの命を救う」。一つひとつの点検・工事が、地域の人たちの“あたりまえの安全”に直結しています。' },
  { icon: '🤝', title: '現場で育ち、現場で繋ぐ', text: '先輩と同行しながら、現場で技術と判断を身につけていく。マラソン救護など、仕事以外でもチームの絆を深めています。' },
]

const persona = [
  {
    title: '経験者',
    body: '電気工事・消防設備の実務経験をお持ちの方。現場経験がそのまま評価されます。消防設備士（甲4／乙6 ほか）・電気工事士などの有資格者は優遇。',
  },
  {
    title: '未経験者',
    body: '「手に職をつけたい」「人の命を守る仕事がしたい」といった現場志向のある方。先輩に同行して学びながら、入社後に資格を取得していく道筋があります。',
  },
  {
    title: '年齢層',
    body: '20代〜30代を中心にお迎えしています。ただし、年齢よりも「現場で学び続ける姿勢」を最も大切にしています。',
  },
]

const certifications = [
  { name: '消防設備士 甲種 第4類', note: '屋内消火栓・自動火災報知設備の工事／整備' },
  { name: '消防設備士 乙種 第6類', note: '消火器の整備・点検' },
  { name: '消防設備点検資格者', note: '消防設備の定期点検業務' },
  { name: '第二種電気工事士', note: '一般住宅・小規模施設の電気工事' },
  { name: '電気通信工事関連資格', note: '非常放送・通信設備の施工' },
]

const requirements = [
  { label: '仕事内容', value: '消防設備の点検・工事・電気通信工事、報告書作成、消防届出補助（公共施設・マンション・工場・学校などを担当）' },
  { label: '応募資格', value: '普通自動車免許（AT限定可）、学歴不問、未経験歓迎' },
  { label: '歓迎資格', value: '消防設備士（甲種4類／乙種6類 ほか）、電気工事士 ※入社後の取得支援あり' },
  { label: '給与', value: '月給 ○○万円〜○○万円（経験・資格により優遇）【要確認】' },
  { label: '昇給・賞与', value: '昇給：年1回／賞与：年2回' },
  { label: '勤務時間', value: '8:30〜17:30（休憩60分）【要確認】' },
  { label: '休日', value: '土日祝、夏季休暇、年末年始休暇、有給休暇' },
  { label: '福利厚生', value: '社会保険完備、資格取得支援制度、作業着貸与、車通勤可' },
  { label: '勤務地', value: '香川県高松市鶴尾 NSビル【番地 要確認】' },
]

const steps = [
  { year: '入社1年目', desc: '現場同行・基礎研修 → 先輩のもとで点検補助からスタート。業界特有の現場感覚を身につける期間です。' },
  { year: '入社2〜3年目', desc: '消防設備士（乙種）取得 → 一人で点検業務を担当。お客様対応と報告書作成も自分で回せるように。' },
  { year: '入社4〜5年目', desc: '消防設備士（甲種）取得 → 工事案件や電気通信工事も担当。提案・見積もりの一部も任されるように。' },
  { year: '入社6年目〜', desc: '現場リーダー → 後輩の指導・案件管理。現場で育った経験そのものが、次の世代へ繋ぐ価値になります。' },
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
            現場で育ち、<br className={styles.spBr} />現場で繋ぐ。
          </h2>
          <p className={styles.heroText}>
            消防設備の仕事は、命を預かる仕事です。<br />
            現場を知らなければ、お客様に一歩踏み込んだ提案はできません。<br />
            だからこそ、私たちは現場で育った人を大切にします。<br />
            経験者も未経験者も、資格取得支援と先輩の伴走で、一生モノの技術を身につけていける環境です。
          </p>
        </div>
      </div>

      {/* 求める人物像 */}
      <FadeIn>
      <section className={styles.persona}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>求める人物像</h2>
          <p className={styles.personaLead}>
            この業界は、現場経験がないとお客様への提案まで踏み込めない特殊性があります。<br />
            だからこそ私たちは、現場で学び、現場で提案できる人を大切にしています。
          </p>
          <div className={styles.personaGrid}>
            {persona.map((p) => (
              <div key={p.title} className={styles.personaCard}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

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

      {/* 評価される資格 */}
      <FadeIn>
      <section className={styles.certifications}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>評価される資格</h2>
          <p className={styles.certLead}>
            消防設備の仕事は、資格の世界でもあります。下記の資格は、入社後の評価・手当・キャリアに直結します。<br />
            未経験の方も、入社後に取得していただくことができます（取得費用は会社が支援します）。
          </p>
          <ul className={styles.certList}>
            {certifications.map((c) => (
              <li key={c.name} className={styles.certItem}>
                <span className={styles.certName}>{c.name}</span>
                <span className={styles.certNote}>{c.note}</span>
              </li>
            ))}
          </ul>
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
