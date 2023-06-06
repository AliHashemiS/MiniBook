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
            nextChapterName='The Apple XR Device: Is Apple Mixed Reality Good Enough?'
            buttonLinkNext='/chapters/chapter1/the-apple-xr-device-is-apple-mixed-reality-good-enough'
            buttonLinkPrevious='/chapters/chapter1/say-hi-to-mom-and-goodbye-to-your-smartphone'
          />
        </div>
      </div>
    </div>
  )
}
