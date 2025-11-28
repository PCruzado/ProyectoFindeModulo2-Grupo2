import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-5 mt-auto" style={{ backgroundColor: 'var(--vet-dark-purple)', color: 'white' }}>
      <Container>
        <Row className="g-4">
          <Col md={4} className="mb-3">
            <div className="d-flex align-items-center mb-3">
                <img 
                    src="/img/logovetrolling.png" 
                    alt="Logo Veterinaria" 
                    width="50" 
                    className="me-2"
                    style={{ borderRadius: '50%' }}
                />
                <h5 className="mb-0 fw-bold">Veterinaria Rolling</h5>
            </div>
            <p className="small text-white-50">
              Somos expertos en el cuidado de tus mascotas. Atención personalizada y urgencias 24hs.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5 className="fw-bold mb-3" style={{ color: 'var(--vet-green)' }}>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none text-white footer-link">Inicio</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-white footer-link">Sobre Nosotros</Link>
              </li>
              <li className="mb-2">
                <Link to="/contacto" className="text-decoration-none text-white footer-link">Contacto</Link>
              </li>
              <li className="mb-2">
                <Link to="/turnos" className="text-decoration-none text-white footer-link">Solicitar Turno</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3" style={{ color: 'var(--vet-green)' }}>Contáctanos</h5>
            <p className="small mb-2">
                <FaMapMarkerAlt className="me-2 text-vet-green" /> Av. General Paz 576, Tucumán
            </p>
            <p className="small mb-2">
                <FaPhone className="me-2 text-vet-green" /> +54 381 123 4567
            </p>
            <p className="small mb-4">
                <FaEnvelope className="me-2 text-vet-green" /> contacto@vetrolling.com
            </p>

            <div>
                <a href="https://facebook.com" className="text-white me-3 social-icon"><FaFacebook size={24} /></a>
                <a href="https://instagram.com" className="text-white me-3 social-icon"><FaInstagram size={24} /></a>
                <a href="https://whatsapp.com" className="text-white social-icon"><FaWhatsapp size={24} /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <div className="text-center small text-white-50">
          &copy; {new Date().getFullYear()} Veterinaria Rolling. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;