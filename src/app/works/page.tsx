'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader/PageHeader'
import FadeIn from '@/components/FadeIn/FadeIn'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import WorksCard from '@/components/WorksCard/WorksCard'
import { worksData } from '@/data/works'
import styles from './page.module.scss'

const categories = [
  { slug: 'all', label: 'すべて' },
  { slug: 'inspection', label: '消防設備点検' },
  { slug: 'construction', label: '消防設備工事' },
  { slug: 'electrical', label: '電気通信工事' },
  { slug: 'sales', label: '防災用品販売' },
]

export default function WorksPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? worksData
    : worksData.filter((w) => w.categorySlug === active)

  return (
    <>
      <PageHeader en="WORKS" ja="実績紹介" description="当社がこれまでに手がけた消防設備の点検・工事の実績をご紹介します。" />

      <FadeIn>
      <section className={styles.works}>
        <div className={styles.inner}>
          <div className={styles.tabs}>
            {categories.map((c) => (
              <button
                key={c.slug}
                className={`${styles.tab} ${active === c.slug ? styles.active : ''}`}
                onClick={() => setActive(c.slug)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((w) => (
              <WorksCard key={w.id} item={w} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>該当する実績はありません。</p>
          )}
        </div>
      </section>
      </FadeIn>

      <ContactCTA />
    </>
  )
}
