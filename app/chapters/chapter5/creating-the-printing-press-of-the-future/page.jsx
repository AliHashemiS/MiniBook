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
            nextChapterName='The Augmented Print Effect'
            buttonLinkNext='/chapters/chapter5/the-augmented-print-effect'
            buttonLinkPrevious='/chapters/chapter4/spatial-content-discovery'
          />
        </div>
      </div>
    </div>
  )
}
