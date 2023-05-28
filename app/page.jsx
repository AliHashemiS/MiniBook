import { Header } from '@/components/header/Header'
import { Container } from '@/components/container/Container'

export const metadata = {
  title: 'Mini Book - Home',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function HomePage () {
  return (
    <div>
      <Header />
      <Container />
    </div>
  )
}
