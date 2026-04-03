import Link from 'next/link'
import type { NewsItem } from '@/data/news'
import styles from './NewsCard.module.scss'

type Props = {
  item: NewsItem
}

export default function NewsCard({ item }: Props) {
  return (
    <li className={styles.card}>
      <Link href={`/news/${item.id}`} className={styles.link}>
        <time className={styles.date}>{item.date}</time>
        <span className={styles.category}>{item.category}</span>
        <span className={styles.title}>{item.title}</span>
      </Link>
    </li>
  )
}
