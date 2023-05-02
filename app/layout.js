import '@/scss/main.scss'
import { Inter } from 'next/font/google'
import {metaIcons} from '@/constants/metaIcons'
import Header from '@/components/common/Header'
import img from "@/public/landing-bg.png";
import PageBG from "@/components/common/PageBG";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome Back! | ND CRM Lite V0.1',
  description: 'Prototype Project by nomadicdev.io',
  themeColor: '#ffffff',
  manifest: '/manifest.json',
  ...metaIcons,
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageBG img={img}/>
        <Header />
        {children}
      </body>
    </html>
  )
}
