import Chat from '@/components/Chat'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Animestore',
  description: 'An Ai Assistant Animestore',
  icons: {
    icon: [
      '/favicon.ico?v=1',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      'apple-touch-icon.png'
    ],
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
          <Analytics />
        </body>
      </Providers>
    </html>
  )
}
