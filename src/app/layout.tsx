import type { Metadata } from 'next'
import { Gabarito } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/NavigationBar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AnimeList',
  description: 'Indonesian Anime List Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <NavigationBar />
        {children}
        </body>
    </html>
  )
}
