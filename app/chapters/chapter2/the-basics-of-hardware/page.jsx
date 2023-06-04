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
            nextChapterName='The Future is Clear with the Right Hardware'
            buttonLinkNext='/chapters/chapter2/the-future-is-clear-with-the-right-hardware'
            buttonLinkPrevious='/chapters/chapter2/catching-up-is-also-hard-to-do'
          />
        </div>
      </div>
    </div>
  )
}
