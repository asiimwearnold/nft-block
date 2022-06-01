import React,{useState} from 'react'
import fire from '../assets/img/fire.png'
import btc from '../assets/img/btc.png'
import usdt from '../assets/img/usdt.png'
import gainers from '../assets/img/gainers.png'
import recent from '../assets/img/recent.png'
import ReactSwitch from 'react-switch'
import Rate from './chain-table/Rate'
import TrendingCard from './TrendingCard'


const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-3xL text-white`,
    flexCenter:`flex items-center`
}
const trendingData=[
    {
        number:1,
        symbal:"BTC",
        name:"Bitcoin",
        icon: btc,
        isIncrement: true,
        rate: "2.34%"
    },
    {
        number:2,
        symbal:"USDT",
        name:"Tether",
        icon: usdt,
        isIncrement: false,
        rate: "9.23%"
    },
    {
        number:3,
        symbal:"BTC",
        name:"Bitcoin",
        icon: btc,
        isIncrement: true,
        rate: "2.34%"
    }

]

const Trending = () => {
    const [checked, setChecked] = useState(false)
  return (
     
    <div className='text-white'>
        <div className={styles.trendingWrapper}>
            <div className='flex justify-between'>
                <h1 className={styles.h1}> Todays Cryptocurrency Price by NFT-Blocker</h1>
                <div className='flex'>
                    <p className='text-gray-400'>Highlights &nbsp;</p>
                    <ReactSwitch checked={checked} onChange={()=>{setChecked(!checked)}}/>
                </div>
            </div>
            <br/>
            <div className='flex'>
                <p className='text-gray-400'>The global crypto market cap is $1.75T, a &nbsp;</p>
                <span><Rate isIncrement={true} rate = '0.53%'/></span>
                <p>&nbsp; decrease over the last day. <span className='underline'> Read More</span></p>
            </div>
            <br/>
            <div className={styles.flexCenter}>
                <TrendingCard title = 'Trending' icon={fire} trendingData = {trendingData}/>
                 <TrendingCard title = 'Biggest Gainers' icon={gainers} trendingData = {trendingData}/>
                  <TrendingCard title = 'Recently Added' icon={recent} trendingData = {trendingData}/>
            </div>
        </div>
    </div>
  )
}

export default Trending 