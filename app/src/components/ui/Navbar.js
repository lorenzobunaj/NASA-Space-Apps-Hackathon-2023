import { withEmotionCache } from '@emotion/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container  style={{
        backgroundColor: '#1b2b85',
        opacity: 0.5}}>
        <Navbar.Brand href="/" className='text-white' style={{fontWeight: 'bolder'}}>Planet Render</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-white' style={{fontWeight: 'bold'}}>Home</Nav.Link>
            <Nav.Link href="/planets" className='text-white' style={{fontWeight: 'bold'}}>Planets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;