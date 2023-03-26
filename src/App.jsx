
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies';
import Cryptodetails from './components/Cryptodetails/Cryptodetails';
import Exchanges from './components/Exchanges/Exchanges';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
function App() {
  return (
   <>
   <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route exact path="/"element={<Homepage />}/>
      <Route exact path="/cryptocurrencies"element={<Cryptocurrencies />}/>
      <Route exact path="/cryptodetails"element={<Cryptodetails />}/>
      <Route exact path="/exchanges"element={<Exchanges />}/>
      <Route exact path="/news"element={<News />}/>
     
     </Routes>
     <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
