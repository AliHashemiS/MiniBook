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
            nextChapterName='The Basics of Hardware'
            buttonLinkNext='/chapters/chapter2/the-basics-of-hardware'
            buttonLinkPrevious='/chapters/chapter2/hardware-is-the-hard-part'
          />
        </div>
      </div>
    </div>
  )
}
