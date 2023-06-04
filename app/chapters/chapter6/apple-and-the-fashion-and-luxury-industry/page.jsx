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
            nextChapterName='Chapter 7: Connected Everything'
            buttonLinkNext='/chapters/chapter7/connected-everything'
            buttonLinkPrevious='/chapters/chapter6/the-world-is-a-giant-trunk-show'
          />
        </div>
      </div>
    </div>
  )
}
