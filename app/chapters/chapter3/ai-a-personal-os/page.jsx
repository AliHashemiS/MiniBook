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
            nextChapterName='AI + AR Glasses for the Real World'
            buttonLinkNext='/chapters/chapter3/ai-ar-glasses-for-the-real-world'
            buttonLinkPrevious='/chapters/chapter3/types-of-ai-(as-defined-by-chat-open-ai)'
          />
        </div>
      </div>
    </div>
  )
}
