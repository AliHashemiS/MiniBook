import Link from 'next/link'
import style from './TitleChapter.module.css'

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
    <div className={style.sectionsWrapper}>
      {dataTitle.map(title => (
        <div key={title.id} className={style.tableComponent}>
          <div className={style.tableHeader}>
            <Link href={title.link ?? ''} className={[style.card]}>
              <p className={style.textWhiteSpace}>
                {title.name}
              </p>
              <span className={style.prueba}>-&gt;</span>
            </Link>
          </div>
          {dataChapter.map(chapter => title.id === chapter.idTitle
            ? (
              <div key={chapter.id} className={style.tableContent}>
                <Link href={chapter.link ?? ''} className={style.card}>
                  <p className={style.textWhiteSpace}>
                    {chapter.name}
                  </p>
                  <span>-&gt;</span>
                </Link>
              </div>
              )
            : (null))}
        </div>
      ))}
    </div>
  )
}
