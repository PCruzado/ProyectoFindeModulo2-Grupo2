import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <Navbar expand="lg" variant="dark" className="bg-vet-purple py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center fw-bold">

            <img
            src="/img/logovetrolling.png"
            width="45"                    
            height="45"
            className="d-inline-block align-top me-2"
            alt="Logo Veterinaria Rolling"
            style={{ borderRadius: '50%', objectFit: 'cover' }} 
           />
            Veterinaria
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link as={Link} to="/" className="text-white">Inicio</Nav.Link>

            <Button variant="light" as={Link} to="/login" className="ms-2">
              Iniciar sesion
            </Button>
            <Button variant="light" as={Link} to="/registro" className="text-vet-purple fw-bold">
              Registro
            </Button>
            <Button className="btn-vet-green ms-2" as={Link} to="/turnos">
              Solicitar Turno
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;