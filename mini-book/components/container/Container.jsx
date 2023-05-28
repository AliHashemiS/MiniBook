import { TitleChapter } from '../TitleChapter/TitleChapter'
import { Button } from '../button/Button'
import style from './Container.module.css'

const dataFetch = () =>{
    return fetch('http://localhost:3000/api/dataInfo', { cache: 'no-store' })
    .then(res => res.json())
}

export async function Container() {
    const dataButton = await dataFetch()

    return(
        <div className={style.pagePadding}>
            <div className={style.containerSmall}>
                <div className={style.contentWrapper}>
                    <div className={style.leftContent}>
                        <div className={style.imageWrapper}>
                            <img src="https://m.media-amazon.com/images/I/71cUdAqWctL._AC_UF1000,1000_QL80_.jpg"/>
                        </div>
                        <div className={style.buttonWrapper}>
                            {dataButton.map(button => 
                                (<Button key={button.id} 
                                buttonName={button.nameButton} 
                                buttonlink={button.link}/>))}
                        </div>
                        <div className={style.divider}>

                        </div>
                        <div className={style.newsletterWrap}>
                            <div className={style.ctaForm}>
                                <form className={style.form}>
                                    <div className={style.signupFormWrapper}>
                                        <div className={style.formContainer}>
                                            <input type='email' maxLength={"256"} name='Email-Address' placeholder='Enter your email...'/>
                                            <input type='submit' value={"Subscribe"}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightContent}>
                        <div className={style.textSection}>
                            <div className={style.smallImageWrapper}>
                                <img className={style.smallImage} src="https://m.media-amazon.com/images/I/71cUdAqWctL._AC_UF1000,1000_QL80_.jpg"/>
                            </div>
                            <h1 className={style.heroHeading}>
                                Mini Book
                            </h1>
                            <p className={style.textSizeRegular}> 
                                A free and chart-filled mini-book on where we are in the Streaming Wars, have been, and will go. From the national and international best-selling author, and former streaming executive, Matthew Ball.
                            </p>
                        </div>
                        <div className={style.divider}>

                        </div>
                        <div>
                            <TitleChapter/>
                            List titles and chapter
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}