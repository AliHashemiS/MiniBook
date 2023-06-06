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
            nextChapterName='Digital Minimalism in a Post-Smartphone Future'
            buttonLinkNext='/chapters/chapter8/digital-minimalism-in-a-post-smartphone-future'
            buttonLinkPrevious='/chapters/chapter8/the-rise-of-ar-glasses'
          />
        </div>
      </div>
    </div>
  )
}
