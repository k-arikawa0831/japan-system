import Link from 'next/link'
import type { WorksItem } from '@/data/works'
import styles from './WorksCard.module.scss'

type Props = {
  item: WorksItem
}

export default function WorksCard({ item }: Props) {
  return (
    <Link href={`/works/${item.id}`} className={styles.card}>
      <div
        className={styles.thumbnail}
        style={{ backgroundImage: `url(/images/works-${item.id}.jpg)` }}
      />
      <div className={styles.body}>
        <span className={styles.category}>{item.category}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.meta}>
          <span>{item.building}</span>
          <span>{item.area}</span>
        </div>
        <p className={styles.description}>{item.description}</p>
      </div>
    </Link>
  )
}
