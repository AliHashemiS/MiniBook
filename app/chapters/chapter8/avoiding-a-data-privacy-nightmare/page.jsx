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
          <NextChapter nextChapterName='Digital Minimalism in a Post-Smartphone Future' buttonlink='/chapters/chapter8/digital-minimalism-in-a-post-smartphone-future' />
        </div>
      </div>
    </div>
  )
}
