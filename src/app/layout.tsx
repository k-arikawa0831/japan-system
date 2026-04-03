import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: {
    default: '日本システムサービス｜香川県の消防設備点検・工事',
    template: '%s｜日本システムサービス',
  },
  description: '香川県高松市の消防設備会社。マンション・ビルの消防設備点検、火災報知設備工事、電気通信工事、消火器販売まで。地域の安全を確かな技術で守ります。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
