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
            nextChapterName='AI–A Personal OS?'
            buttonLinkNext='/chapters/chapter3/ai-a-personal-os'
            buttonLinkPrevious='/chapters/chapter3/ai-as-a-personal-assistant'
          />
        </div>
      </div>
    </div>
  )
}
