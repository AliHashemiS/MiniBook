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
            nextChapterName='Catching up is also hard to do'
            buttonLinkNext='/chapters/chapter2/catching-up-is-also-hard-to-do'
            buttonLinkPrevious='/chapters/chapter1/the-apple-xr-device-is-apple-mixed-reality-good-enough'
          />
        </div>
      </div>
    </div>
  )
}
