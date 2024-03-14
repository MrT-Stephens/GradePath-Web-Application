import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'GradePath',
    image: '/GradePathLogo.svg',
    slogan: 'THE PATH TO SUCESS',
    description: 'GradePath is a platform that helps students find their best path to success.',
    authors: [{ name: 'Thomas Stephens' }, { name: 'Mathew Mann' }, { name: 'James Williams' }],

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.gradepath.vercel.app/',
        site_name: 'GradePath',
        title: 'GradePath',
        description: 'GradePath is a platform that helps students find their best path to success.',
        image: '/GradePathLogo.svg',
    },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
