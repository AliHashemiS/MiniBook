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
            nextChapterName='The Future of AR Glasses, in a Nutshell'
            buttonLinkNext='/chapters/chapter1/the-future-of-ar-glasses-in-a-nutshell'
            buttonLinkPrevious='/'
          />
        </div>
      </div>
    </div>
  )
}
