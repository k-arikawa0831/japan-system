import Link from 'next/link'
import { notFound } from 'next/navigation'
import { newsData } from '@/data/news'
import styles from './page.module.scss'

export function generateStaticParams() {
  return newsData.map((item) => ({ id: String(item.id) }))
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const item = newsData.find((n) => n.id === Number(id))
    return {
      title: item?.title ?? 'お知らせ',
    }
  })
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = newsData.find((n) => n.id === Number(id))

  if (!item) {
    notFound()
  }

  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.inner}>
          <Link href="/news" className={styles.back}>← お知らせ一覧に戻る</Link>
        </div>
      </div>

      <article className={styles.article}>
        <div className={styles.inner}>
          <div className={styles.meta}>
            <time className={styles.date}>{item.date}</time>
            <span className={styles.category}>{item.category}</span>
          </div>
          <h1 className={styles.title}>{item.title}</h1>
          <div className={styles.content}>
            {item.content.split('\n').map((line, i) => (
              <p key={i}>{line || <br />}</p>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
