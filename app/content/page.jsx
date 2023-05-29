import { Header } from '@/components/header/Header'
import { Chapter } from '@/components/chapter/Chapter'

export const metadata = {
  title: 'Mini Book - Home',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function HomePage () {
  return (
    <div>
      <Chapter />
    </div>
  )
}