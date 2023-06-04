import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faLink } from '@fortawesome/free-solid-svg-icons'

import {
  faTwitter,
  faLinkedinIn,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'

import styles from './ShareIcons.module.css'

library.add(
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faLink
)

export function ShareIcons () {
  return (
    <div className={styles.socialWrapper}>
      <Link href={('https://www.facebook.com/sharer/sharer.php?u=' + process.env.URL) ?? ''}>
        <FontAwesomeIcon className={styles.icon} icon={faFacebookF} />
      </Link>
      <Link href={('https://twitter.com/intent/tweet/?url=' + process.env.URL) ?? ''}>
        <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
      </Link>
      <Link href={('https://www.linkedin.com/sharing/share-offsite/?url=' + process.env.URL) ?? ''}>
        <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
      </Link>
    </div>
  )
}
