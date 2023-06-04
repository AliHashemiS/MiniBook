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
            nextChapterName='Avoiding a Data Privacy Nightmare'
            buttonLinkNext='/chapters/chapter8/avoiding-a-data-privacy-nightmare'
            buttonLinkPrevious='/chapters/chapter8/dont-fear-the-future'
          />
        </div>
      </div>
    </div>
  )
}
