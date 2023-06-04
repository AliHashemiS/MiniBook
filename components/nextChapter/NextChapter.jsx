import styles from './NextChapter.module.css'
import { Button } from '../button/Button'

export function NextChapter ({ nextChapterName, buttonlink }) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 style={{ color: 'black' }}>
          Next content
        </h3>
        <p className={styles.textContent}>
          {nextChapterName}
        </p>
      </div>
      <Button buttonName='Next ➤' buttonlink={buttonlink} />
    </div>
  )
}
