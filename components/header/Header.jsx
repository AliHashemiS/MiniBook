import Link from 'next/link'
import { ShareIcons } from '../shareIcons/ShareIcons'
import style from './Header.module.css'

export function Header () {
  return (
    <header className={style.nav}>
      <div className={style.container}>
        <div className={style.navLeft}>
          <Link href={process.env.URL ?? ''}>
            <img className={style.smallImage} src='https://images.squarespace-cdn.com/content/v1/5fe89dc9fce1941cd9ed77b4/1612547206154-7KBIW4NYLIQX2DXA9HTK/Cathy_LogoRevised-43.png?format=1500w' />
          </Link>
        </div>
        <div className={style.navRight}>
          <div className={style.shareWrap}>
            <ShareIcons />
          </div>
        </div>
      </div>
    </header>
  )
}
