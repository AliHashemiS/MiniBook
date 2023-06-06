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
            nextChapterName='The Rise of AR Glasses'
            buttonLinkNext='/chapters/chapter8/the-rise-of-ar-glasses'
            buttonLinkPrevious='/chapters/chapter7/virtual-air-rights'
          />
        </div>
      </div>
    </div>
  )
}
