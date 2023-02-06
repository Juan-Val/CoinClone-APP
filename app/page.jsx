import NavList from '../src/components/NavList'
import ListItem from '@/components/ListItem';
import "../src/styles/global.css";

const getData = () => {
  return  fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=1h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=20&offset=0',{
    headers: {
    'X-RapidAPI-Key': 'a0eb0126c2msh73decf39a65ef3ap136c38jsn20577f00b999',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  })
  .then(res => res.json())
}

export default async function home () {

  const res = await getData()
  const coins = res.data.coins;
  return (
      <main className='main'>
        <NavList />
        {coins.map(coin => (
          <ListItem key={coin.tier} coint={coin}/>
        ))}
      </main>
  )
}