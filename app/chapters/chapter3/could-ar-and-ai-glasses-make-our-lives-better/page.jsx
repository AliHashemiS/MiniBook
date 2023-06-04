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
            nextChapterName='AI as a personal assistant'
            buttonLinkNext='/chapters/chapter3/ai-as-a-personal-assistant'
            buttonLinkPrevious='/chapters/chapter2/the-future-is-clear-with-the-right-hardware'
          />
        </div>
      </div>
    </div>
  )
}
