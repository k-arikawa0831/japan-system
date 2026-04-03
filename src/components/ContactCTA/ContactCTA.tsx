import Link from 'next/link'
import styles from './ContactCTA.module.scss'

export default function ContactCTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <span className={styles.en}>CONTACT</span>
        <p className={styles.text}>
          消防設備のことなら、<br className={styles.spBr} />
          お気軽にご相談ください。
        </p>
        <div className={styles.actions}>
          <div className={styles.tel}>
            <span className={styles.telLabel}>お電話でのお問い合わせ</span>
            <span className={styles.telNumber}>000-000-0000</span>
            <span className={styles.telNote}>受付時間：平日 8:30〜17:30</span>
          </div>
          <div className={styles.divider} />
          <Link href="/contact" className={styles.button}>
            <span>お問い合わせフォーム</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
