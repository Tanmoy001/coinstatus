import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useGetCryptosQuery } from '../../services/cryptoApi';
// import { useDispatch } from 'react-redux';
import millify from 'millify';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import News from '../News/News';
import { Link } from 'react-router-dom';

import BeatLoader from 'react-spinners/BeatLoader'
import './homepage.css'
const Homepage =({mode}) =>{
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log('from  home')
  //   dispatch(cryptoData)

  // }, [dispatch])
  const {data,isFetching}=useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data,'data');
  if(isFetching)return<BeatLoader className='rotateloader'
  style={{height:'100vh'}}
  color={'#3189'}
/>
  return (
    <section id='home'>
      <div className='container homepage'>
       <div className='crypto_status'>
         <div className='heading'>
           <h3>Global Crypto Stats</h3></div>
           <div className='all_status'>
              <Row className='coin_status'>
                <Col ><div className='status' title='Total Crypto'>Total Crypto</div> 
                <div className='status amount ' title='Total Crypto' >{globalStats.total}</div> </Col>
                <Col ><div className='status' title='Total Crypto'>Total Exchanges</div>
                <div className='status amount' title='Total Crypto' >{globalStats.totalExchanges}</div></Col>
               </Row>
                <Row className='coin_status'>
                  <Col ><div className='status' title='Total Crypto'>Total Market Cap</div>
                  <div className='status amount' title='Total Crypto' >{millify(globalStats.totalMarketCap)}</div></Col>
              
                  <Col ><div className='status' title='Total Crypto'>Total 24h Volume</div>
                  <div className='status amount' title='Total Crypto' >{millify(globalStats.total24hVolume)}</div></Col>
                </Row>
                <Row className='coin_status'>
                  <Col ><div className='status' title='Total Crypto'>Total Markets</div>
                  <div className='status amount' title='Total Crypto' >{globalStats.totalMarkets}</div></Col>
                  <Col ><div className='status' title='Total Crypto'></div>
                  <div className='status amount' title='Total Crypto' ></div></Col>
                </Row>
                </div>
      </div>
      <div className='container crypto_conins'>
        <div className='heading'>
          
          <h2>Top 10 Cryptocurrencies in the world</h2>
          <Link className='cryptocurrencies' to="/cryptocurrencies" >More</Link>
          </div>
          <Cryptocurrencies simplified/>
          
      </div>

      <div className='container crypto_news'>
        <div className='heading'>
          <h2>Latest Crypto news in the world</h2>
          <a href='/news' >More</a>
          </div>
          <News simplified/>
         
      </div>
   </div>
   </section>
  )
}

export default Homepage
