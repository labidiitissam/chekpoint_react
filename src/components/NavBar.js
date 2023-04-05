import React from 'react';
/*import { Button, Form, Nav, NavDropdown, Navbar, Container  } from 'react-bootstrap';*/
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
    <nav>
    <h2 className="text1">Portfolio</h2>
           <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">resume</a></li>
            <li><a href="#work">work</a></li>
            
        </ul>

</nav>
    </div>
  )
}

export default NavBar
