import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './style.css';

export default class Header extends Component{
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Gaming</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Canais</Nav.Link>
            <Nav.Link href="#pricing">Streamers</Nav.Link>
            <NavDropdown title="Configurações" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><i class="fas fa-sign-out-alt"></i> Sair</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><i class="fas fa-cog"></i> Preferencias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><i class="fas fa-info-circle"></i> Sobre</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Made By:</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Lucas Carinhanha
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
