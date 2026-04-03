import type { StaffItem } from '@/data/staff'
import styles from './StaffCard.module.scss'

type Props = {
  item: StaffItem
}

export default function StaffCard({ item }: Props) {
  const years = new Date().getFullYear() - item.joinYear

  return (
    <div className={styles.card}>
      <div className={styles.photo}>
        <span className={styles.placeholder}>PHOTO</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{item.name}</h3>
        <div className={styles.meta}>
          <span>{item.joinYear}年入社（勤続{years}年）</span>
          <span>{item.role}</span>
        </div>
        <div className={styles.qualifications}>
          {item.qualifications.map((q) => (
            <span key={q} className={styles.badge}>{q}</span>
          ))}
        </div>
        <dl className={styles.qa}>
          {item.qa.map((item) => (
            <div key={item.question} className={styles.qaItem}>
              <dt>Q. {item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
