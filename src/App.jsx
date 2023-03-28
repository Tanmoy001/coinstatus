
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies';
import Cryptodetails from './components/Cryptodetails/Cryptodetails';
import Exchanges from './components/Exchanges/Exchanges';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import React,{useState} from 'react';
function App() {
  const [mode, setmode] = useState('Light');

  const togglemode=()=>{
 
    if(mode==='Light'){
      setmode('aliceblue');
      document.body.style.backgroundColor="aliceblue";
  
      //setIntervl(()=>{
        //decument.title="dafasdf";
      //  },1500);
    }
    else{
      setmode('Light');
      document.body.style.backgroundColor="white";
   
    }
  }
  // console.log(mood,'setmood')
  return (
   <>
   <BrowserRouter>
      <Navbar togglemode={togglemode}/>
     <Routes>
      <Route exact path="/"element={<Homepage mode={mode}/>}/>
      <Route exact path="/cryptocurrencies"element={<Cryptocurrencies />}/>
      <Route exact path="/crypto/:coinId"element={<Cryptodetails />}/>
      <Route exact path="/exchanges"element={<Exchanges />}/>
      <Route exact path="/news"element={<News />}/>
     
     </Routes>
     <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
