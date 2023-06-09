import Link from 'next/link'
import { TitleChapter } from '../TitleChapter/TitleChapter'
import { Footer } from '../footer/Footer'
import styles from './Container.module.css'
import Subscription from '../subscription/Subscription'
import Image from 'next/image'
import Comment from '../comment/Comment'

export function Container () {
  return (
    <div className={styles.pagePadding}>
      <div className={styles.containerSmall}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <div className={styles.imageWrapper}>
              <Image width={300} height={410} className={styles.mainImage} src='/images/Cover.png' alt='A Wearable world Cover' />
              <div className={styles.divider} />
              <Subscription />
              <div className={styles.divider} />
            </div>
            <div className={styles.buttonWrapper}>
              <h1 className={styles.heroHeading}>
                A Wearable World: Your Guide to the Post Smartphone Future powered by AI, AR, and Spatial Computing.
              </h1>
              <h3 className={styles.heroHeading}>
                By Cathy Hackl & Lily Snyder
              </h3>
              <p className={styles.textSizeRegular}>
                This <Link href={'/' ?? ''} className={styles.hyperLink}>minibook</Link> is your guide to understanding the impact of Apple’s new Spatial computing device, Vision Pro and how it will transform the world of business, communication and collaboration. This free resource is jam packed with insights and foresight from two VR/AR/tech pioneers - <Link href={'https://www.linkedin.com/in/cathyhackl/' ?? ''} className={styles.hyperLink}>Cathy Hackl</Link>, renown <Link href={'https://www.cathyhackl.com/' ?? ''} className={styles.hyperLink}>author/speaker/futurist</Link> and <Link href={'https://journey.world/' ?? ''} className={styles.hyperLink}>tech executive</Link> with extensive experience working in AR/VR, spatial computing and gaming (at HTC VIVE, Magic Leap, AWS, Journey), and seasoned AR/VR/Immersive tech strategist and writer, <Link href={'https://www.linkedin.com/in/lilysnyder/' ?? ''} className={styles.hyperLink}>Lily Snyder</Link>.
              </p>
              <p className={styles.textSizeRegular}>
                Together they have an almost combined two decades of experience in the immersive tech field.
              </p>
              <p className={styles.textSizeRegular}>
                This minibook helps you make sense of the convergence of technologies like VR, AR, AI, XR, and Spatial computing today as well as gives you a peek into the post-smartphone and post-computer future, plus an analysis of what Apple’s Vision Pro headset might unlock for business and for humanity. This is Your Guide to the Post-Smartphone Future Powered by AI, AR, and Spatial computing.
              </p>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.indexContainer}>
              <div className={styles.divider} />
              <h1 className={styles.indexTitle}>
                Comment
              </h1>
              <Comment />
              <div className={styles.divider} />
              <h1 className={styles.indexTitle}>
                Content Flow
              </h1>
              <TitleChapter />
              <div className={styles.divider} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
