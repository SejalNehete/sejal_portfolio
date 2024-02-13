import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import { Slide } from "react-awesome-reveal";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => setExpanded(false);

  return (
    <Slide direction='down' triggerOnce={true}>
      <Navbar collapseOnSelect expand="lg" className='main-navbar' style={{ backgroundColor: '#fff' }} expanded={expanded}>
        <Navbar.Brand href="/" >
          <div className="circle"></div>Sejal Nehete
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" style={{ backgroundColor: '#fff' }}>
          <Nav style={{ backgroundColor: '#fff' }}>
            <Link className='menu nav-link' to='/' onClick={handleNavCollapse}>Home</Link>
            <Link className='menu nav-link' to='/resume' onClick={handleNavCollapse}>Resume</Link>
            <Link className='menu nav-link' to='/project' onClick={handleNavCollapse}>Project</Link>
            <Link className='menu nav-link' to='/contact' onClick={handleNavCollapse}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Slide>
  );
};

export default Header;
