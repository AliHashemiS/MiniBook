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
            nextChapterName='Virtual Air Rights'
            buttonLinkNext='/chapters/chapter7/virtual-air-rights'
            buttonLinkPrevious='/chapters/chapter7/connected-everything'
          />
        </div>
      </div>
    </div>
  )
}
