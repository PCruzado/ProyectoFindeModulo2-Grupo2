
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// --- Datos Ficticios del Equipo de Desarrollo ---

const SobreNosotros = () => {
  return (
    <Container className="my-5">
      
    
      <Row className="mb-5 p-4 rounded shadow-sm bg-light">
        <Col md={12} className="text-center">
          <h2 className="display-4 fw-bold text-success mb-3">Nuestra Historia: Cuidando Mascotas desde 1980</h2>
          <p className="lead text-secondary">
            Todo comenzó con un gran amor por los animales.
          </p>
        </Col>
        <Col md={10} className="mx-auto mt-3">
          <p>
            **La Clínica Veterinaria Rolling** abrió sus puertas hace más de 40 años con la misión de ofrecer atención médica de la más alta calidad y un trato cálido para cada paciente. Desde un pequeño consultorio en el barrio, hemos crecido hasta convertirnos en un centro de referencia en la región, equipados con tecnología de última generación para diagnóstico, cirugía y hospitalización.
          </p>
          <p>
            Creemos firmemente que la prevención es la clave para una vida larga y saludable. Nuestro compromiso es educar a los dueños y construir una relación de confianza duradera, poniendo siempre el bienestar de tu compañero peludo, emplumado o escamado en primer lugar.
          </p>
         
        </Col>
      </Row>

      <hr className="my-5" />

      {/* ==================================== */}
      {/* 💻 SECCIÓN 2: EQUIPO DE DESARROLLO */}
      {/* ==================================== */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="fw-bold text-primary">
            Conoce a nuestros veterinarios.
          </h2>
          <p className="lead text-muted">
           
          </p>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} xl={5} className="g-4 justify-content-center">
        {equipoDesarrollo.map((miembro) => (
          <Col key={miembro.id}>
            <Card className="h-100 shadow-sm border-0 text-center">
              <Card.Img 
                variant="top" 
                src={miembro.foto} 
                className="mx-auto rounded-circle mt-3" 
                style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold text-dark">{miembro.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted fst-italic">{miembro.rol}</Card.Subtitle>
                <Card.Text className="flex-grow-1">
                  {miembro.bio}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Button variant="outline-info" size="sm">Perfil</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default SobreNosotros;