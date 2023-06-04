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
            nextChapterName='Chapter 8 Reference'
            buttonLinkNext='/chapters/references/chapter8'
            buttonLinkPrevious='/chapters/references/chapter6'
          />
        </div>
      </div>
    </div>
  )
}
