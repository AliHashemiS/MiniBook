import { ReadingBar } from '@/components/readingBar/ReadingBar'
import './globals.css'
import styles from './Layout.module.css'

export default function ContentLayout ({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.barLoader}>
        <ReadingBar />
      </div>
      {children}
    </div>
  )
}
