import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'XOXO, HANAZAWA | Gossip Girl Meets Psychic Power',
  description: 'The Upper East Side has nothing on this drama. An esper\'s observations on power, control, and growth.',
  openGraph: {
    title: 'XOXO, HANAZAWA',
    description: 'Gossip Girl meets psychic power',
    images: ['https://files.shapes.inc/api/files/84082661_annotated.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-navy text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
