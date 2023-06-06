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
            nextChapterName='Chapter 8: Don’t Fear the Future'
            buttonLinkNext='/chapters/chapter8/dont-fear-the-future'
            buttonLinkPrevious='/chapters/chapter7/everything-is-connected'
          />
        </div>
      </div>
    </div>
  )
}
