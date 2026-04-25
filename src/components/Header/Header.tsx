'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

const navItems = [
  { href: '/service', label: '事業内容' },
  { href: '/company', label: '会社概要' },
  { href: '/works', label: '実績紹介' },
  { href: '/staff', label: '社員紹介' },
  { href: '/recruit', label: '採用情報' },
  { href: '/news', label: 'お知らせ' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/*
          TODO: ロゴ AI データ受領後、以下をコメントアウトし <Image src="/images/logo.svg" alt="日本システムサービス" /> へ差し替え。
          現状はテキストロゴで運用。
        */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMain}>日本システムサービス</span>
          <span className={styles.logoSub}>NIHON SYSTEM SERVICE</span>
        </Link>

        <div className={styles.headerRight}>
          <nav className={styles.pcNav}>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contact" className={styles.contactBtn}>
            お問い合わせ
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* SP Nav Overlay */}
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(false)} />
      <nav className={`${styles.spNav} ${isOpen ? styles.open : ''}`}>
        <div className={styles.spNavHeader}>
          <span className={styles.spNavLogo}>日本システムサービス</span>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="閉じる">
            <span /><span />
          </button>
        </div>
        <ul>
          <li><Link href="/" onClick={() => setIsOpen(false)}>ホーム</Link></li>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>お問い合わせ</Link></li>
        </ul>
        <div className={styles.spNavTel}>
          <span>お電話でのお問い合わせ</span>
          <strong>000-000-0000</strong>
        </div>
      </nav>
    </header>
  )
}
