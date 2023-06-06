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
            nextChapterName='Types of AI (as defined by Chat.OpenAI)'
            buttonLinkNext='/chapters/chapter3/types-of-ai-(as-defined-by-chat-open-ai)'
            buttonLinkPrevious='/chapters/chapter3/could-ar-and-ai-glasses-make-our-lives-better'
          />
        </div>
      </div>
    </div>
  )
}
