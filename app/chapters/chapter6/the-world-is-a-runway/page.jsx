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
          <NextChapter
            nextChapterName='The Virtual World of Fashion'
            buttonLinkNext='/chapters/chapter6/the-virtual-world-of-fashion'
            buttonLinkPrevious='/chapters/chapter5/when-books-go-digital'
          />
        </div>
      </div>
    </div>
  )
}
