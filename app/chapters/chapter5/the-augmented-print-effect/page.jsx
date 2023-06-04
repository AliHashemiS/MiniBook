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
            nextChapterName='When Books Go Digital'
            buttonLinkNext='/chapters/chapter5/when-books-go-digital'
            buttonLinkPrevious='/chapters/chapter5/creating-the-printing-press-of-the-future'
          />
        </div>
      </div>
    </div>
  )
}
