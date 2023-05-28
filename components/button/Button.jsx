import style from './Button.module.css'

export function Button ({ buttonName, buttonlink }) {
  return (
    <a href={buttonlink} className={style.button}>
      {buttonName}
    </a>
  )
}
