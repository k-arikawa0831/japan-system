'use client'

import PageHeader from '@/components/PageHeader/PageHeader'
import FadeIn from '@/components/FadeIn/FadeIn'
import styles from './page.module.scss'

export default function ContactPage() {
  return (
    <>
      <PageHeader en="CONTACT" ja="お問い合わせ" />

      <FadeIn>
      <section className={styles.contact}>
        <div className={styles.inner}>
          <div className={styles.telBox}>
            <p className={styles.telLabel}>お電話でのお問い合わせ</p>
            <p className={styles.telNumber}>000-000-0000</p>
            <p className={styles.telNote}>受付時間：平日 8:30〜17:30</p>
          </div>

          <div className={styles.formArea}>
            <h2 className={styles.formTitle}>フォームからのお問い合わせ</h2>
            <p className={styles.formNote}>
              以下のフォームに必要事項をご入力のうえ、送信してください。<br />
              <span className={styles.required}>*</span> は必須項目です。
            </p>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  お名前 <span className={styles.required}>*</span>
                </label>
                <input type="text" className={styles.input} placeholder="山田 太郎" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  会社名・マンション名
                </label>
                <input type="text" className={styles.input} placeholder="○○マンション管理組合" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  電話番号 <span className={styles.required}>*</span>
                </label>
                <input type="tel" className={styles.input} placeholder="000-000-0000" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  メールアドレス <span className={styles.required}>*</span>
                </label>
                <input type="email" className={styles.input} placeholder="example@email.com" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  お問い合わせ種別 <span className={styles.required}>*</span>
                </label>
                <select className={styles.select}>
                  <option value="">選択してください</option>
                  <option>消防設備の点検について</option>
                  <option>消防設備の工事について</option>
                  <option>消火器・防災用品について</option>
                  <option>採用について</option>
                  <option>その他</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  お問い合わせ内容 <span className={styles.required}>*</span>
                </label>
                <textarea className={styles.textarea} rows={6} placeholder="お問い合わせ内容をご記入ください" />
              </div>

              <div className={styles.submitArea}>
                <p className={styles.demoNote}>※ デモサイトのため、送信機能は動作しません</p>
                <button type="submit" className={styles.submitButton}>
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      </FadeIn>
    </>
  )
}
