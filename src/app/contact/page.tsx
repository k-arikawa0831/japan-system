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
            <p className={styles.telNote}>受付時間：平日 8:30〜17:30 ／ 電話番号は公開時までに【要確認】</p>
          </div>

          <div className={styles.formArea}>
            <h2 className={styles.formTitle}>フォームからのお問い合わせ</h2>
            <p className={styles.formNote}>
              以下のフォームに必要事項をご入力のうえ、送信してください。<br />
              <span className={styles.required}>*</span> は必須項目です。
            </p>

            {/*
              TODO: 送信先メールアドレス（新規 Gmail）取得後に /api/contact ルートを実装。
              現状は onSubmit={preventDefault} のスタブ。
            */}
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  お名前 <span className={styles.required}>*</span>
                </label>
                <input type="text" className={styles.input} placeholder="山田 太郎" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  会社名・建物名
                </label>
                <input type="text" className={styles.input} placeholder="○○マンション管理組合／○○株式会社" />
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
                <select className={styles.select} defaultValue="">
                  <option value="">選択してください</option>
                  <option>消防設備点検・保守について</option>
                  <option>消防設備工事について</option>
                  <option>電気通信工事について</option>
                  <option>防災用品（消火器ほか）について</option>
                  <option>採用について</option>
                  <option>公共入札・見積依頼について</option>
                  <option>その他</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  お問い合わせ内容 <span className={styles.required}>*</span>
                </label>
                <textarea className={styles.textarea} rows={6} placeholder="建物の種類・規模、ご要望内容などをご記入ください" />
              </div>

              <div className={styles.submitArea}>
                <p className={styles.demoNote}>※ 本フォームは現在デモ表示のため、送信機能は動作しません（送信先メールアドレス整備後に稼働します）</p>
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
