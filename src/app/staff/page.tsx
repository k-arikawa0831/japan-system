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
      <PageHeader en="STAFF" ja="社員紹介" description="日本システムサービスで働く社員をご紹介します。一人ひとりが専門の資格を持ち、日々現場で建物の安全を守っています。" />

      <FadeIn>
      <section className={styles.staff}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {staffData.map((s) => (
              <StaffCard key={s.id} item={s} />
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      <ContactCTA />
    </>
  )
}
