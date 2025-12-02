import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Login from './Login.jsx';

const Navigation = ({ usuarioLogueado, setUsuarioLogueado }) => {

  const navegacion = useNavigate();
  
  const logout = () => {
    setUsuarioLogueado(false);
    navegacion("/");
  };
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-vet-purple py-3 shadow" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white fw-bold fs-4">
            <img
              src="/img/logovetrolling.png" 
              onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/3047/3047928.png" }} 
              width="50"
              height="50"
              className="d-inline-block align-top me-2 bg-white p-1 rounded-circle"
              alt="Logo Veterinaria"
              style={{ objectFit: 'contain' }} 
            />
            <span style={{ letterSpacing: '1px' }}>Veterinaria</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 text-white" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">            
            {usuarioLogueado ? (
              <>
                <NavLink 
                  to="/administrador"
                  className={({ isActive }) => 
                    isActive ? "nav-link text-white fw-bold border-bottom border-2" : "nav-link text-white opacity-75 hover-effect"
                  }
                >
                  Administrador
                </NavLink>
                
                <Button 
                  variant="outline-light" 
                  onClick={logout} 
                  className="ms-2 px-4 rounded-pill"
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <NavLink 
                  end 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "nav-link text-white fw-bold border-bottom border-2" : "nav-link text-white opacity-75 hover-effect"
                  }
                >
                  Inicio
                </NavLink>

                <Button 
                  onClick={handleShow} 
                  className="nav-link text-white opacity-75 hover-effect bg-transparent border-0 p-0"
                >
                  Iniciar sesión
                </Button>

                <Button 
                  as={Link} 
                  to="/registro" 
                  variant="light" 
                  className="text-vet-purple fw-bold px-4 rounded-pill shadow-sm"
                >
                  Registro
                </Button>
                
                <Button 
                  as={Link} 
                  to="/turnos" 
                  className="btn-vet-green px-4 rounded-pill text-white fw-bold shadow-sm"
                  style={{border: 'none'}}
                >
                  Solicitar Turno
                </Button>
              </>
            )}

          </Nav>
        </Navbar.Collapse>
        <Login 
          show={show}
          handleClose={handleClose}
          setUsuarioLogueado={setUsuarioLogueado} 
        />
      </Container>
    </Navbar>
  );
};

export default Navigation;