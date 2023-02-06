import style from '../styles/navList.module.css'

export default function NavList (){
  return (
    <nav className={style.navList}>
      <ul className={style.navList__ul}>
        <li className="">Name</li>
        <li className={style.navList__li}>Price</li>
        <li className={style.navList__li}>Market cap</li>
        <li className={style.navList__li}>24h</li>
      </ul>
    </nav>
  )
}