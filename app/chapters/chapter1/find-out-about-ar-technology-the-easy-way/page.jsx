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
          <NextChapter nextChapterName='The Apple XR Device: Is Apple Mixed Reality Good Enough?' buttonlink='/chapters/chapter1/the-apple-xr-device-is-apple-mixed-reality-good-enough' />
        </div>
      </div>
    </div>
  )
}
