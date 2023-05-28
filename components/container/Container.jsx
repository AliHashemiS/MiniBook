import { TitleChapter } from '../TitleChapter/TitleChapter'
import { Button } from '../button/Button'
import style from './Container.module.css'

const dataFetch = () => {
  return fetch(process.env.URL + '/api/dataInfo', { cache: 'no-store' })
    .then(res => res.json())
}

export async function Container () {
  const dataButton = await dataFetch()

  return (
    <div className={style.pagePadding}>
      <div className={style.containerSmall}>
        <div className={style.contentWrapper}>
          <div className={style.leftContent}>
            <div className={style.imageWrapper}>
              <img className={style.mainImage} src='https://m.media-amazon.com/images/I/71cUdAqWctL._AC_UF1000,1000_QL80_.jpg' />
            </div>
            <div className={style.buttonWrapper}>
              <h1 className={style.heroHeading}>
                Mini Book
              </h1>
              <p className={style.textSizeRegular}>
                Cathy Hackl is one of the most sought-after keynote technology speakers in the world. Considered one of the top women in augmented reality, virtual reality, spatial computing and innovation, she works at the intersection of future technology, strategy, and storytelling, drawing audiences from around the world and across industries.
              </p>
              {dataButton.map(button => (<Button key={button.id} buttonName={button.nameButton} buttonlink={button.link} />))}
              <div className={style.divider} />
              <div className={style.newsletterWrap}>
                <div className={style.ctaForm}>
                  <form className={style.form}>
                    <div className={style.signupFormWrapper}>
                      <div className={style.formContainer}>
                        <input className={style.inputEmail} type='email' maxLength='256' name='Email-Address' placeholder='Enter your email...' />
                        <input className={style.inputSubmit} type='submit' value='Subscribe' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className={style.rightContent}>
            <div className={style.indexContainer}>
              <h1 className={style.indexTitle}>
                Index
              </h1>
              <TitleChapter />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
