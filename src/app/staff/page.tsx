import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader/PageHeader'
import FadeIn from '@/components/FadeIn/FadeIn'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import StaffCard from '@/components/StaffCard/StaffCard'
import { staffData } from '@/data/staff'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: '社員紹介',
  description: '日本システムサービスで働く社員をご紹介します。消防設備のプロフェッショナルたちの声をお届けします。',
}

export default function StaffPage() {
  return (
    <>
      <PageHeader en="STAFF" ja="社員紹介" description="安全を繋ぐのは、いつも、人です。現場で育ち、現場で繋ぐ社員たちをご紹介します。" />

      <FadeIn>
      <section className={styles.staff}>
        <div className={styles.inner}>
          <p className={styles.lead}>
            一つの建物の奥には、何百人、時には何千人の暮らしと仕事があります。<br />
            その日々の&ldquo;あたりまえの安全&rdquo;を支えているのは、特別な機械ではなく、現場に立ち続ける一人ひとりの技術者です。
          </p>
          <div className={styles.grid}>
            {staffData.map((s) => (
              <StaffCard key={s.id} item={s} />
            ))}
          </div>
          <p className={styles.note}>
            ※ 順次、社員紹介を追加予定です。
          </p>
        </div>
      </section>
      </FadeIn>

      <ContactCTA />
    </>
  )
}
