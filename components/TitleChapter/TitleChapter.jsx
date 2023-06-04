import Link from 'next/link'
import styles from './TitleChapter.module.css'

const dataTitleFetch = () => {
  return fetch(process.env.URL + '/api/dataTitle', { cache: 'no-store' })
    .then(res => res.json())
}

const dataChapterFetch = () => {
  return fetch(process.env.URL + '/api/dataChapter', { cache: 'no-store' })
    .then(res => res.json())
}

export async function TitleChapter () {
  const dataTitle = await dataTitleFetch()
  const dataChapter = await dataChapterFetch()

  return (
    <div className={styles.sectionsWrapper}>
      {dataTitle.map(title => (
        <div key={title.id} className={styles.tableComponent}>
          <div className={styles.tableHeader}>
            <Link href={title.link ?? ''} className={[styles.card]}>
              <p className={styles.textWhiteSpace}>
                {title.name}
              </p>
              <span className={styles.arrow}>➜</span>
            </Link>
          </div>
          {dataChapter.map(chapter => title.id === chapter.idTitle
            ? (
              <div key={chapter.id} className={styles.tableContent}>
                <Link href={chapter.link ?? ''} className={styles.card}>
                  <p className={styles.textWhiteSpace}>
                    {chapter.name}
                  </p>
                  <span className={styles.arrow}>➜</span>
                </Link>
              </div>
              )
            : (null))}
        </div>
      ))}
    </div>
  )
}
