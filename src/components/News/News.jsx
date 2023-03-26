import React,{useEffect,useState} from 'react'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi'
import './news.css'
function News({simplified}) {
const count = simplified?10:100;
const {data:cryptoNews,isFetching}=useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:count});

  console.log(cryptoNews,'news')

  const [cryptonews, setCryptonews] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const filterData = cryptoNews?.value;
  useEffect(() => {
    
    const filteredData = filterData?filterData.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase())):''
    setCryptonews(filteredData)
    
  }, [filterData,searchTerm]);

  if(isFetching)return'Loading.......'
  return (
    <section id='News'>
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
    {cryptonews && cryptonews.map((news,i)=>(

<div className="card" style={{width: "25%",height:'auto',margin:'2%'}}key={i}>
<img className="card-img-top" src={news.image?news.image.thumbnail.contentUrl:"https://m.foolcdn.com/media/dubs/images/original_imagesoriginal_imageshttpsg.foolcdn.c.width-880_SfbkM9V.jpg"} alt="...."/>
<div className="card-body">
  <h5 className="card-title">{(news.name > 10) ? (`${news.name.substring(0,30)}....`):news.name}</h5>
  
  <p className="card-text">{news.description > 60 ?`${news.description.substring(0,60)}......`:news.description}</p>
  {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:'1'}}>{source} */}
{/* </span> */}
  {/* <p className="card-text"><small className="text-muted">by {!author?"anomamous":author} on {new Date(date).toGMTString()}</small></p> */}
  <a href={news.url} className="btn btn-sm btn-primary">More</a>
</div>
</div>

    ))}

    
</div>
    </section>
  )
}

export default News
