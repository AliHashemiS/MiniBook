'use client'
import { NextChapter } from '@/components/nextChapter/NextChapter'
import Content from './content.mdx'
import styles from './Content.module.css'

export default function ContentPage () {
  return (
    <div className={styles.pagePadding}>
      <div className={styles.containerSmall}>
        <div className={styles.contentWrapper}>
          <Content />
          <div className={styles.divider} />
          <NextChapter
            nextChapterName='Apple and The Fashion & Luxury Industry'
            buttonLinkNext='/chapters/chapter6/apple-and-the-fashion-and-luxury-industry'
            buttonLinkPrevious='/chapters/chapter6/the-virtual-world-of-fashion'
          />
        </div>
      </div>
    </div>
  )
}
