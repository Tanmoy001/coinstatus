import React,{useState} from 'react'
import millify from 'millify'
import './cryptodetails.css'
import { useGetCryptoDetailsQuery } from '../../services/cryptoApi'
import { useParams } from 'react-router-dom'
import { MdOutlinePriceChange } from 'react-icons/md';
import { SiCodersrank } from 'react-icons/si';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { GiCalavera } from 'react-icons/gi';
import Linechart from './Linechart'
// import HTMLReactParser from 'html-react-parser';
import BeatLoader from 'react-spinners/BeatLoader'
import { useGetCryptoHistoryQuery } from '../../services/cryptoApi'
const Cryptodetails=()=> {
  const { coinId } = useParams();
  
  const [timePeriod, setTimeperiod] = useState('7d');
  const {data,isFetching} = useGetCryptoDetailsQuery(coinId);

  const {data:coinHistory} = useGetCryptoHistoryQuery({coinId,timePeriod});
 const details=data?.data?.coin
  if(isFetching)return <BeatLoader className='rotateloader'
  style={{height:'100vh'}}
  color={'#3189'}
/>
  // const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  const stats=[
    {icon:<MdOutlinePriceChange/>,title :'Price in USD',value:`$ ${millify(details.price)}`},
    {icon:<SiCodersrank/>,title :'Rank',value:`${details.rank}`},
    {icon:<FaMapMarkedAlt/>,title :'Market Cap',value:`${millify(details.marketCap)}`},
    {icon:<GiCalavera/>,title :'All-time-high(daily avg)',value:`${millify(details.allTimeHigh.price)}`},
  ];
  const genericStats=[
    {icon:<MdOutlinePriceChange/>,title :'Number of Markets',value:`${millify(details.numberOfMarkets)}`},
    {icon:<MdOutlinePriceChange/>,title :'Number of Exchanges',value:`${details.numberOfExchanges}`},
    // {icon:<MdOutlinePriceChange/>,title :'Aprroved Supply',value:`${millify(details.supply.total)}`},
    {icon:<MdOutlinePriceChange/>,title :'Total Supply',value:`${millify(details.supply.max)}`},
    {icon:<MdOutlinePriceChange/>,title :'Circulating Supply',value:`${millify(details.supply.circulating)}`},
  ];
  return (
    <section id='cryptodetails'>
      <div className='container details_heading'>
        <h3>{details.name}-({details.symbol})</h3>
        <p className='descrioption'>{details.description}</p>
      </div>

      <select className='select-timeperiod' defaultValue={'7d'} value={timePeriod} onChange={(e) => setTimeperiod(e.target.value)}>
      <option value="3h">3h</option>
  <option value="24h">24h</option>
  <option value="7d">7d</option>
  <option value="30d">30d</option>
  <option value="3m">3m</option>
  <option value="1y">1y</option>
  <option value="3y">3y</option>
  <option value="5y">5y</option>
      </select>
      <Linechart coinHistory={coinHistory} currentPrice ={millify(details.price)} coinName={details.name}/>
      <div className='container all_status'>
      <div className='status'>
        <h4>{details.name} Value Statistics</h4>
        {stats.map(({icon,title,value})=>(
         <div className='icon_and_tag'>
          {icon}
          {title}
          <p className='real_value'>{value}</p>
         </div>
          ))}
      </div>
      <div className='status'>
        <h4>Other Statistics</h4>
        {genericStats.map(({icon,title,value})=>(
         <div className='icon_and_tag'>
          {icon}
          {title}
          <p className='real_value'>{value}</p>
         </div>
          ))}
      </div>
      </div>
      
    </section>
  )
}

export default Cryptodetails
