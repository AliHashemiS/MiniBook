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
            nextChapterName='Everything is Connected'
            buttonLinkNext='/chapters/chapter7/everything-is-connected'
            buttonLinkPrevious='/chapters/chapter6/apple-and-the-fashion-and-luxury-industry'
          />
        </div>
      </div>
    </div>
  )
}
