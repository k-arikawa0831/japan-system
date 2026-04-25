import Link from 'next/link'
import styles from './Footer.module.scss'

const navItems = [
  { href: '/service', label: '事業内容' },
  { href: '/company', label: '会社概要' },
  { href: '/works', label: '実績紹介' },
  { href: '/staff', label: '社員紹介' },
  { href: '/recruit', label: '採用情報' },
  { href: '/news', label: 'お知らせ' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.info}>
            {/*
              TODO: ロゴ AI データ受領後、以下をコメントアウトし <Image src="/images/logo.svg" alt="日本システムサービス" /> へ差し替え。
              現状はテキストロゴで運用。
            */}
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMain}>日本システムサービス</span>
              <span className={styles.logoSub}>NIHON SYSTEM SERVICE</span>
            </Link>
            <address className={styles.address}>
              〒000-0000 香川県高松市鶴尾 NSビル【番地 要確認】<br />
              TEL: 000-000-0000 【要確認】
            </address>
          </div>

          <nav className={styles.nav}>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.social}>
            <a
              href="https://www.instagram.com/nss_bousai/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span>@nss_bousai</span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <small>&copy; {new Date().getFullYear()} 日本システムサービス All Rights Reserved.</small>
      </div>
    </footer>
  )
}
