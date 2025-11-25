
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router";
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
    <Navbar expand="lg" variant="dark" className="bg-vet-purple py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center fw-bold">

          <img
            src="/public/img/logovetrolling.png"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Logo Veterinaria"
            style={{ objectFit: 'contain' }}
          />
          Veterinaria
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link as={Link} to="/" className="text-white">Inicio</Nav.Link>

            {usuarioLogueado ? (
              <>
                <NavLink className="nav-link" to={"/administrador"}>
                  Administrador
                </NavLink>
                <Button className="text-black nav-link" onClick={logout}>
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <Button onClick={handleShow} className='text-black nav-link' to={"/login"}>
                Iniciar sesión
              </Button>
            )}
            <Button variant="light" as={Link} to="/registro" className="text-vet-purple fw-bold">
              Registro
            </Button>
            <Button className="btn-vet-green ms-2" as={Link} to="/turnos">
              Solicitar Turno
            </Button>

          </Nav>
        </Navbar.Collapse>
        <Login show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          setUsuarioLogueado={setUsuarioLogueado} />
      </Container>
    </Navbar>
  );
};

export default Navigation;