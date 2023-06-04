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
            nextChapterName='The World is a Giant Trunk Show'
            buttonLinkNext='/chapters/chapter6/the-world-is-a-giant-trunk-show'
            buttonLinkPrevious='/chapters/chapter6/the-world-is-a-runway'
          />
        </div>
      </div>
    </div>
  )
}
