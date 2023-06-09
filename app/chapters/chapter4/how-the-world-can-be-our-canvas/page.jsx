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
            nextChapterName='Spatial Content Discovery'
            buttonLinkNext='/chapters/chapter4/spatial-content-discovery'
            buttonLinkPrevious='/chapters/chapter4/the-world-is-our-canvas'
          />
        </div>
      </div>
    </div>
  )
}
