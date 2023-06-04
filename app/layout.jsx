import { Header } from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'A Wearable World',
  description: 'This minibook is your guide to understanding the impact of Apple’s new Mixed Reality XR device on business and communications.',
  icons: {
    icon: process.env.URL + '/images/Logo.ico'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
