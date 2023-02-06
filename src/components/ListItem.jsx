import Image from 'next/image';
import style from '../styles/ListItem.module.css'

export default function ListItem ({coint}) {
  return (
    <div className={style.itemList}>
      <div className={style.itemImage}>
        <div className={style.image}>
          <p>{coint.rank}</p>
          <Image
            src={coint.iconUrl}
            width={34}
            height={35}
            alt="Picture of the author"
            />
        </div>
      <div className={style.texts}>
        <h5>{coint.name}</h5>
        <p className={style.text2}>{coint.symbol}</p>
      </div>
      </div>
      <p className={style.text3}>$ {parseInt(coint.price).toFixed(2)}</p>
      <p className={style.text3}>${(coint.marketCap/1000000000).toFixed(2)} Billion</p>
      <p className={(Math.floor(coint.change)) < 0 ? style.negativo : style.positivo}>
       {coint.change}
      </p>
    </div>
  )
}

