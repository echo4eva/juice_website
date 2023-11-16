import { Inter } from 'next/font/google'
import '../styles/globals.css'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'juice',
  description: 'made by jericho imperial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
