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
          <NextChapter nextChapterName='Shaping a Positive Future with AR Glasses' buttonlink='/chapters/chapter8/shaping-a-positive-future-with-ar-glasses' />
        </div>
      </div>
    </div>
  )
}
