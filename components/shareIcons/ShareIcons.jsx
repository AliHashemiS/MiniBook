import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ShareIcons.module.css'

const dataFetch = () => {
  return fetch(`https://mini-book.vercel.app/api/dataSocialMedia`, { cache: 'no-store' })
    .then(res => res.json())
}

export async function ShareIcons () {
  const dataSocialMedia = await dataFetch()

  return (
    <div className={styles.socialWrapper}>
      {dataSocialMedia.map(social => (
        <Link key={social.id} href={social.link}>
          <FontAwesomeIcon className={styles.icon} icon={social.icon} />
        </Link>
      ))}
    </div>
  )
}
