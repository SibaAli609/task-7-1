import './NavbarAbout.css';
import React from "react";
import img1 from './../../assets/imges/plane.webp';
import img2 from './../../assets/imges/logo.svg';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GoSearch } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

 export function NavbarAbout(){
    return(
       
        <div className='nav2'>
           <div className='my-imgs'>
             <img className='my-img1' src={img1}></img>
             <img className='my-img2' src={img2}></img>
           </div>
           <div >
         <Navbar expand="lg">
      <Container>
        
        <div >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to={'/'} className='mx-3 mylink'>Home</Link>
           
            <Link to={'/about'} className='mx-3 mylink'>About</Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" className='mx-2'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="basic-nav-dropdown" className='mx-2'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown" className='mx-2'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Link to={'/contact'} className='mx-2 mylink'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        <div className='d-flex align-items-center btn-logo'>
        <GoSearch className='mx-3'/>
        </div>
        <div className='nav2-btn'><Button    className='my-btn-nav2 rounded-pill mx-3 d-flex align-items-center'>
        Get A Quote <FaArrowRightLong className='mx-2'/>
      </Button>
      </div>
        
      </Container>
    </Navbar>
    </div>
         
        </div>
        
    )
 }