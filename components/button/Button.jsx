import Link from 'next/link'
import style from './Button.module.css'

export function Button ({ buttonName, buttonlink }) {
  return (
    <Link href={buttonlink ?? ''} className={style.button}>
      {buttonName}
    </Link>
  )
}
