import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'GradePath',
    slogan: 'THE PATH TO SUCESS',
    description: 'GradePath is a platform that helps students find their best path to success.',
    authors: [{ name: 'Thomas Stephens' }, { name: 'Mathew Mann' }, { name: 'James Williams' }],
    icon: '/GradePathLogo.svg',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
