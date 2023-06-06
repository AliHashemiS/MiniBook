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
            nextChapterName='Say Hi to Mom and Goodbye to Your Smartphone'
            buttonLinkNext='/chapters/chapter1/say-hi-to-mom-and-goodbye-to-your-smartphone'
            buttonLinkPrevious='/chapters/quickstart'
          />
        </div>
      </div>
    </div>
  )
}
