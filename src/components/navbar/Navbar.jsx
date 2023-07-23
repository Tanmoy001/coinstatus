import React, { useState, useEffect } from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiCoins } from 'react-icons/gi';
import {
    Link
  } from "react-router-dom";
  
function NavigationBar ({togglemode}) {
   const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]); 
  return (
     <nav style={{ display: isVisible ? 'block' : 'none' }}> 
    <Navbar className='navbar' collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
        <GiCoins style={{marginRight: "15px",height:'20px',width:'20px'}}/>
      <Navbar.Brand>CoinCom</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/cryptocurrencies">Cryptocurrencies</Link></li>
        {/* <li className="nav-item"><Link className="nav-link" to="/exchanges">Exchanges</Link></li> */}
        <li className="nav-item"><Link className="nav-link" to="/news">News</Link></li>
         
          
        </Nav>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>togglemode(null)}/>
</div>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>

    </Container>
  </Navbar>
   </nav> 
  )
}

export default NavigationBar 
