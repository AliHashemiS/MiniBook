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
            nextChapterName='Chapter 3: Could AR and AI Glasses Make Our Lives Better?'
            buttonLinkNext='/chapters/chapter3/could-ar-and-ai-glasses-make-our-lives-better'
            buttonLinkPrevious='/chapters/chapter2/the-basics-of-hardware'
          />
        </div>
      </div>
    </div>
  )
}
