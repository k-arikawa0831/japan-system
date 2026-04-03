import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader/PageHeader'
import FadeIn from '@/components/FadeIn/FadeIn'
import ContactCTA from '@/components/ContactCTA/ContactCTA'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: '事業内容',
  description: '消防設備の点検・保守、消防設備工事、電気通信工事、防災用品販売。日本システムサービスの事業内容をご紹介します。',
}

export default function ServicePage() {
  return (
    <>
      <PageHeader en="SERVICE" ja="事業内容" description="消防設備の点検・工事を中心に、電気通信工事、防災用品の販売まで、建物の安全に関わるサービスをトータルで提供しています。" />

      {/* Navigation */}
      <nav className={styles.anchorNav}>
        <div className={styles.inner}>
          <ul>
            <li><a href="#inspection">消防設備点検・保守</a></li>
            <li><a href="#construction">消防設備工事</a></li>
            <li><a href="#electrical">電気通信工事</a></li>
            <li><a href="#sales">防災用品販売</a></li>
          </ul>
        </div>
      </nav>

      {/* 消防設備点検・保守 */}
      <section id="inspection" className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🔍</span>
            消防設備点検・保守
          </h2>
          <p className={styles.sectionLead}>
            消防法により、消防設備は定期的な点検が義務づけられています。
            当社では、点検の実施から報告書の作成・消防署への届出まで一括で対応いたします。
          </p>

          <h3 className={styles.h3}>点検対象設備</h3>
          <ul className={styles.checkList}>
            <li>自動火災報知設備（煙感知器・熱感知器）</li>
            <li>消火器</li>
            <li>スプリンクラー設備</li>
            <li>屋内消火栓設備</li>
            <li>誘導灯・避難器具</li>
            <li>非常警報設備</li>
            <li>連結送水管</li>
          </ul>

          <h3 className={styles.h3}>煙感知器と熱感知器の違い</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>仕組み</th>
                  <th>主な設置場所</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>煙感知器</td>
                  <td>火災で発生する煙を感知して作動</td>
                  <td>居室・廊下・階段</td>
                </tr>
                <tr>
                  <td>熱感知器（定温式）</td>
                  <td>周囲が一定の温度を超えると作動</td>
                  <td>キッチン・脱衣所など</td>
                </tr>
                <tr>
                  <td>熱感知器（差動式）</td>
                  <td>周囲の温度が急激に変化すると作動</td>
                  <td>居室・倉庫など</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.note}>
            ※ 掃除で感知器を拭いただけでも作動する場合があります。お手入れの際はご注意ください。
          </p>

          <h3 className={styles.h3}>点検の種類と頻度</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>点検種別</th>
                  <th>頻度</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>機器点検</td>
                  <td>6ヶ月に1回</td>
                  <td>外観・機能の確認</td>
                </tr>
                <tr>
                  <td>総合点検</td>
                  <td>1年に1回</td>
                  <td>実際に作動させて総合的に確認</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={styles.h3}>消防署への報告義務</h3>
          <ul className={styles.list}>
            <li>特定防火対象物（飲食店・ホテル等）：<strong>1年に1回</strong></li>
            <li>非特定防火対象物（マンション・事務所等）：<strong>3年に1回</strong></li>
          </ul>

          <h3 className={styles.h3}>点検の流れ</h3>
          <ol className={styles.flow}>
            <li>
              <span className={styles.flowNumber}>1</span>
              <span>お問い合わせ・ご相談</span>
            </li>
            <li>
              <span className={styles.flowNumber}>2</span>
              <span>現地調査・お見積り</span>
            </li>
            <li>
              <span className={styles.flowNumber}>3</span>
              <span>日程調整</span>
            </li>
            <li>
              <span className={styles.flowNumber}>4</span>
              <span>点検実施</span>
            </li>
            <li>
              <span className={styles.flowNumber}>5</span>
              <span>報告書作成・消防署届出</span>
            </li>
            <li>
              <span className={styles.flowNumber}>6</span>
              <span>不具合があれば改修のご提案</span>
            </li>
          </ol>
          </FadeIn>
        </div>
      </section>

      {/* 消防設備工事 */}
      <section id="construction" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <FadeIn>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🔧</span>
            消防設備工事
          </h2>
          <p className={styles.sectionLead}>
            新築・改築に伴う消防設備の新規設置から、老朽化した既存設備の更新・改修工事まで対応しています。
          </p>

          <h3 className={styles.h3}>対応工事</h3>
          <ul className={styles.checkList}>
            <li>自動火災報知設備の設計・施工</li>
            <li>スプリンクラー設備の設置工事</li>
            <li>屋内消火栓設備の設置工事</li>
            <li>誘導灯・避難器具の設置</li>
            <li>非常放送設備の設置</li>
            <li>消火器の設置・配置計画</li>
          </ul>

          <h3 className={styles.h3}>対象建物</h3>
          <div className={styles.tagList}>
            {['マンション・集合住宅', 'オフィスビル・商業施設', '飲食店・ホテル', '工場・倉庫', '医療施設・福祉施設'].map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          <h3 className={styles.h3}>こんなときはご相談ください</h3>
          <ul className={styles.list}>
            <li>新築・増改築で消防設備の設置が必要</li>
            <li>消防署から改善指導を受けた</li>
            <li>設備が古くなり更新したい</li>
            <li>点検で不具合が見つかった</li>
          </ul>
          </FadeIn>
        </div>
      </section>

      {/* 電気通信工事 */}
      <section id="electrical" className={styles.section}>
        <div className={styles.inner}>
          <FadeIn>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>⚡</span>
            電気通信工事
          </h2>
          <p className={styles.sectionLead}>
            消防設備は電気設備と密接に関わっています。当社では消防設備の施工に付随する電気工事もワンストップで対応可能です。
          </p>

          <h3 className={styles.h3}>対応工事</h3>
          <ul className={styles.checkList}>
            <li>消防設備に伴う電気配線工事</li>
            <li>非常放送設備工事</li>
            <li>インターホン設備工事</li>
            <li>自家発電設備関連の電気工事</li>
            <li>非常用照明設備の設置</li>
          </ul>
          </FadeIn>
        </div>
      </section>

      {/* 防災用品販売 */}
      <section id="sales" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <FadeIn>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🧯</span>
            防災用品販売
          </h2>
          <p className={styles.sectionLead}>
            消火器をはじめとする防災用品の販売・設置を行っています。
          </p>

          <h3 className={styles.h3}>取扱商品</h3>
          <ul className={styles.checkList}>
            <li>業務用消火器（粉末・強化液）</li>
            <li>住宅用消火器</li>
            <li>住宅用火災警報器</li>
            <li>防災備蓄品</li>
          </ul>

          <h3 className={styles.h3}>消火器の点検ポイント</h3>
          <ul className={styles.list}>
            <li>製造年から10年以上経過していないか</li>
            <li>ラベルや表示が読めるか</li>
            <li>圧力ゲージが正常値を指しているか</li>
            <li>安全栓が外れていないか</li>
            <li>本体にサビや変形がないか</li>
          </ul>
          <p className={styles.note}>
            ※ 古くなった消火器は破裂の危険があります。交換時期のご相談もお気軽にどうぞ。
          </p>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
