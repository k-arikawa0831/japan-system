import styles from './PageHeader.module.scss'

type Props = {
  en: string
  ja: string
  description?: string
}

export default function PageHeader({ en, ja, description }: Props) {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.inner}>
        <span className={styles.en}>{en}</span>
        <h1 className={styles.ja}>{ja}</h1>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  )
}
