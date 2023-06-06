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
            nextChapterName='Chapter 3 Reference'
            buttonLinkNext='/chapters/references/chapter3'
            buttonLinkPrevious='/chapters/references/chapter1'
          />
        </div>
      </div>
    </div>
  )
}
