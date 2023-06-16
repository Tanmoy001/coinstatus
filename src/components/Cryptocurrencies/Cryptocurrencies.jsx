import millify from 'millify';
import './cryptocurrencies.css'
import React,{useState,useEffect} from 'react'
// import millify from 'millify'
// import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader'
const Cryptocurrencies = ({simplified}) => {
  const count = simplified?10:100;
  console.log(count,'count')
  const {data:cryptosList,isFetching}=useGetCryptosQuery(count);
  const [crypto, setCrypto] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const filterData = cryptosList?.data?.coins;
  
  console.log(cryptosList,'cryptolist')
  console.log(filterData,'filterdata');
console.log(cryptosList,'cryptolist')
  useEffect(() => {
    
    const filteredData = filterData?filterData.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase())):''
    setCrypto(filteredData)
    
  }, [filterData,searchTerm]);
  
  if(isFetching)return<BeatLoader className='rotateloader'
  style={{height:'100vh',width:'100%'}}
  color={'#3189'}
/>
  return (
    <>
    {console.log(crypto,'filterdata')}
    
      {!simplified &&(
    <nav className="navbar bg-light">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearchTerm(e.target.value)}/>
      
    </form>
  </div>
</nav>  
)}

<div id='coins'>
    {crypto && crypto.map((currency)=>(
      <Link className='linking' to={`/crypto/${currency.uuid}`} >
<div className="card" key={currency.id}>
<img src={currency.iconUrl}className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{currency.rank}.&nbsp;&nbsp;{currency.name}</h5>
</div>
<ul className="list-group list-group-flush">
<li className="list-group-item">Rank : {currency.rank}</li>
  <li className="list-group-item">Price : {millify(currency.price)}</li>
  <li className="list-group-item">Market Cap : {millify(currency.marketCap)}</li>
 
</ul>
</div>
</Link>
    ))}

    
   </div>
   
    
    </>
  )
}

export default Cryptocurrencies
