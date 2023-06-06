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
            nextChapterName='Shaping a Positive Future with AR Glasses'
            buttonLinkNext='/chapters/chapter8/shaping-a-positive-future-with-ar-glasses'
            buttonLinkPrevious='/chapters/chapter8/avoiding-a-data-privacy-nightmare'
          />
        </div>
      </div>
    </div>
  )
}
