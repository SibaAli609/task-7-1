import { Button } from 'react-bootstrap';
import './Navbar.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GoSearch } from "react-icons/go";
import { IoCartSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import logo1 from './../../assets/imges/logo.svg';
import { Link } from 'react-router-dom';
function navbar(){
    return(
      <div className='d-flex justify-content-center'>
      <Navbar expand="lg" className="my-navbar bg-body-tertiary rounded-pill  position-fixed ">
      <Container>
        <img className='my-logo' src={logo1}></img>
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
        <IoCartSharp className='mx-3'/>
        <Button    className=' rounded-pill mx-3 d-flex align-items-center'>
        GETAQUOTE <FaArrowRightLong className='mx-2'/>
      </Button>
        </div>
      </Container>
    </Navbar>
    </div>
    );
}
export default navbar;