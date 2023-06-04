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
            nextChapterName='How The World Can Be Our Canvas'
            buttonLinkNext='/chapters/chapter4/how-the-world-can-be-our-canvas'
            buttonLinkPrevious='/chapters/chapter3/ai-ar-glasses-for-the-real-world'
          />
        </div>
      </div>
    </div>
  )
}
