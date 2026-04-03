import styles from './SectionTitle.module.scss'

type Props = {
  en: string
  ja: string
  align?: 'center' | 'left'
  color?: 'dark' | 'light'
}

export default function SectionTitle({ en, ja, align = 'center', color = 'dark' }: Props) {
  return (
    <div className={`${styles.title} ${styles[align]} ${styles[color]}`}>
      <span className={styles.en}>{en}</span>
      <h2 className={styles.ja}>{ja}</h2>
    </div>
  )
}
