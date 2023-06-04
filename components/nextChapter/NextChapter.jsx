import styles from './NextChapter.module.css'
import { Button } from '../button/Button'

export function NextChapter ({ nextChapterName, buttonLinkNext, buttonLinkPrevious }) {
  return (
    <div className={styles.container}>
      <Button buttonName='<- Previous' buttonlink={buttonLinkPrevious} />
      <div className={styles.textContainer}>
        <h3 className={styles.textTitle}>
          Next content
        </h3>
        <p className={styles.textContent}>
          {nextChapterName}
        </p>
      </div>
      <Button buttonName='Next ->' buttonlink={buttonLinkNext} />
    </div>
  )
}
