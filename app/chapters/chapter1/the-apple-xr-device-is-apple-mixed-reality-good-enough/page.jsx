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
            nextChapterName='Chapter 2: Hardware is the Hard Part'
            buttonLinkNext='/chapters/chapter2/hardware-is-the-hard-part'
            buttonLinkPrevious='/chapters/chapter1/find-out-about-ar-technology-the-easy-way'
          />
        </div>
      </div>
    </div>
  )
}
