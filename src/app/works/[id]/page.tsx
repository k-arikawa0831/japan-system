import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import { worksData } from '@/data/works'
import styles from './page.module.scss'

export function generateStaticParams() {
  return worksData.map((item) => ({ id: String(item.id) }))
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const item = worksData.find((w) => w.id === Number(id))
    return {
      title: item?.title ?? '実績紹介',
    }
  })
}

export default async function WorksDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = worksData.find((w) => w.id === Number(id))

  if (!item) {
    notFound()
  }

  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.inner}>
          <Link href="/works" className={styles.back}>← 実績一覧に戻る</Link>
        </div>
      </div>

      <article className={styles.article}>
        <div className={styles.inner}>
          {/* ヘッダー */}
          <div className={styles.meta}>
            <span className={styles.category}>{item.category}</span>
            <span className={styles.area}>{item.area}</span>
          </div>
          <h1 className={styles.title}>{item.title}</h1>

          {/* メイン画像プレースホルダー */}
          <div className={styles.mainImage}>
            <span className={styles.placeholder}>施工写真</span>
          </div>

          {/* 概要 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>概要</h2>
            <div className={styles.overviewTable}>
              <table>
                <tbody>
                  <tr>
                    <th>建物</th>
                    <td>{item.building}</td>
                  </tr>
                  <tr>
                    <th>エリア</th>
                    <td>{item.area}</td>
                  </tr>
                  <tr>
                    <th>工期</th>
                    <td>{item.detail.period}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.text}>{item.detail.overview}</p>
          </section>

          {/* 作業内容 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>作業内容</h2>
            <ul className={styles.scopeList}>
              {item.detail.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          {/* ポイント */}
          <section className={styles.section}>
            <h2 className={styles.h2}>ポイント</h2>
            <div className={styles.pointBox}>
              <p>{item.detail.point}</p>
            </div>
          </section>

          {/* ギャラリープレースホルダー */}
          <section className={styles.section}>
            <h2 className={styles.h2}>施工写真</h2>
            <div className={styles.gallery}>
              {[1, 2, 3].map((n) => (
                <div key={n} className={styles.galleryItem}>
                  <span className={styles.placeholder}>写真 {n}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <ContactCTA />
    </>
  )
}
