import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader/PageHeader'
import FadeIn from '@/components/FadeIn/FadeIn'
import NewsCard from '@/components/NewsCard/NewsCard'
import { newsData } from '@/data/news'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'お知らせ',
  description: '日本システムサービスからのお知らせ一覧です。',
}

export default function NewsPage() {
  return (
    <>
      <PageHeader en="NEWS" ja="お知らせ" />

      <FadeIn>
      <section className={styles.news}>
        <div className={styles.inner}>
          <ul className={styles.list}>
            {newsData.map((n) => (
              <NewsCard key={n.id} item={n} />
            ))}
          </ul>
        </div>
      </section>
      </FadeIn>
    </>
  )
}
