import style from './TitleChapter.module.css'

const dataTitleFetch = () => {
  return fetch(`${process.env.link}api/dataTitle`, { cache: 'no-store' })
    .then(res => res.json())
}

const dataChapterFetch = () => {
  return fetch(`${process.env.link}api/dataChapter`, { cache: 'no-store' })
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
            <a href={title.link} className={[style.card]}>
              <p className={style.textWhiteSpace}>
                {title.name} asdadjnqwdjnqwdjnqwjndqwhjndqwhbdqwbdqwdqwuduqwdfbnqwidnmqwdfasdfwefwewef <span>-&gt;</span>
              </p>
            </a>
          </div>
          {dataChapter.map(chapter => title.id === chapter.idTitle
            ? (
              <div key={chapter.id} className={style.tableContent}>
                <a href={chapter.link} className={style.card}>
                  <p className={style.textWhiteSpace}>
                    {chapter.name} :id - {chapter.idTitle} - :id Title - {title.id}
                  </p>
                  <span>-&gt;</span>
                </a>
              </div>
              )
            : (null))}
        </div>
      ))}
    </div>
  )
}
