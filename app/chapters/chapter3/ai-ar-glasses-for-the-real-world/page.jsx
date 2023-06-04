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
            nextChapterName='Chapter 4: The World is Our Canvas'
            buttonLinkNext='/chapters/chapter4/the-world-is-our-canvas'
            buttonLinkPrevious='/chapters/chapter3/ai-a-personal-os'
          />
        </div>
      </div>
    </div>
  )
}
