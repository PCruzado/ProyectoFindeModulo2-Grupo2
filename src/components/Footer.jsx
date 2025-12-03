import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-vet-dark-purple text-white pt-4 pb-2 mt-auto">
      <Container>
        <Row className="gy-3 justify-content-between">

            <Col md={4} className="d-flex flex-column align-items-center align-items-md-start">
                <Link to="/" className="d-flex align-items-center text-white text-decoration-none mb-2">
                    <img 
                        src="/img/logovetrolling.png" 
                        alt="Logo" 
                        width="35" 
                        height="35" 
                        className="bg-white rounded-circle p-1 me-2"
                        onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/3047/3047928.png" }}
                    />
                    <span className="fw-bold fs-6">Veterinaria Rolling</span>
                </Link>
                <p className="small text-white-50 text-center text-md-start mb-0">
                    Cuidado profesional y cariño para tus mascotas. <br /> Urgencias 24hs.
                </p>
            </Col>

            <Col md={4} className="text-center">
                <h6 className="fw-bold mb-2 text-uppercase" style={{fontSize: '0.8rem', letterSpacing: '1px', opacity: 0.8}}>Enlaces</h6>
                <ul className="list-unstyled small mb-0 d-flex flex-column gap-1">
                    <li><Link to="/" className="text-white-50 text-decoration-none footer-link">Inicio</Link></li>
                    <li><Link to="/about" className="text-white-50 text-decoration-none footer-link">Sobre Nosotros</Link></li>
                    <li><Link to="/contacto" className="text-white-50 text-decoration-none footer-link">Contacto</Link></li>
                    <li><Link to="/turnos" className="text-white-50 text-decoration-none footer-link">Turnos</Link></li>
                </ul>
            </Col>

            <Col md={4} className="text-center text-md-end">
                <h6 className="fw-bold mb-2 text-uppercase" style={{fontSize: '0.8rem', letterSpacing: '1px', opacity: 0.8}}>Contacto</h6>
                <ul className="list-unstyled small text-white-50 mb-2">
                    <li className="mb-1"><i className="bi bi-geo-alt-fill me-1"></i> Av. General Paz 576, Tucumán</li>
                    <li className="mb-1"><i className="bi bi-whatsapp me-1"></i> +54 381 123 4567</li>
                </ul>
                <div>
                    <a href="#" className="text-white me-3 social-icon"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-white me-3 social-icon"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="text-white social-icon"><i className="bi bi-whatsapp"></i></a>
                </div>
            </Col>
        </Row>
        
        <hr className="border-light opacity-25 my-2" />
        
        <div className="text-center">
            <p className="mb-0 text-white-50" style={{fontSize: '0.75rem'}}>
                &copy; 2025 Veterinaria Rolling. Todos los derechos reservados.
            </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;