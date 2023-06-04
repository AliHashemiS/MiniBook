'use client'
import { NextChapter } from '@/components/nextChapter/NextChapter'
import Content from './content.mdx'
import styles from './Content.module.css'

export default async function ContentPage () {
  return (

    <div className={styles.pagePadding}>
      <div className={styles.containerSmall}>
        <div className={styles.contentWrapper}>
          <Content />
          <div className={styles.divider} />
          <NextChapter nextChapterName='Apple and The Fashion & Luxury Industry' buttonlink='/chapters/chapter6/apple-and-the-fashion-and-luxury-industry' />
        </div>
      </div>
    </div>
  )
}
