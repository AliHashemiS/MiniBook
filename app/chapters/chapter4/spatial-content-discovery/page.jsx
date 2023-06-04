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
            nextChapterName='Chapter 5: Creating the Printing Press of the Future'
            buttonLinkNext='/chapters/chapter5/creating-the-printing-press-of-the-future'
            buttonLinkPrevious='/chapters/chapter4/how-the-world-can-be-our-canvas'
          />
        </div>
      </div>
    </div>
  )
}
