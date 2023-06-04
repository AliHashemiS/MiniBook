'use client'
import { useEffect, useState } from 'react'
import styles from './ReadingBar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faDiamond } from '@fortawesome/free-brands-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

library.add(
  faBookmark
)

export function ReadingBar () {
  // Width State
  const [width, setWidth] = useState(0)

  // scroll function
  const scrollHeight = () => {
    const el = document.documentElement
    const ScrollTop = el.scrollTop || document.body.scrollTop
    const ScrollHeight = el.scrollHeight || document.body.scrollHeight
    const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100
    // store percentage in state
    setWidth(percent)
  }

  // useEffect to control the component lifecycle
  useEffect(() => {
    window.addEventListener('scroll', scrollHeight)
    return () => window.removeEventListener('scroll', scrollHeight)
  })

  return (
    <div style={{ display: (width ? ('flex') : ('none')) }} className={styles.progress}>
      <div style={{ height: width + '%' }} className={styles.progressDone}>
        <span className={styles.progressValue}>
          <FontAwesomeIcon className={styles.icon} icon={faBookmark} />
          {Math.round(width) + '%'}
        </span>
      </div>
    </div>
  )
}
