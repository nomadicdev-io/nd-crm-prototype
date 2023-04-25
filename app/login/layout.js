import '@/scss/main.scss'
import { Inter } from 'next/font/google'
import {metaIcons} from '@/constants/metaIcons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Login | ND CRM Lite V0.1',
  description: 'Prototype Project by nomadicdev.io',
  themeColor: '#ffffff',
  manifest: '/manifest.json',
  ...metaIcons,
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
