

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import fotoerror404 from '../../public/img/error404.png';

import { useNavigate } from 'react-router-dom';


function Error404() {
  
  
  const navigate = useNavigate(); // 2. Inicializamos useNavigate

  // Función de navegación real
  const navigateToHome = () => {
    navigate('/'); // 3. Redirigimos a la ruta raíz (página de inicio)
  };

  return (
    <Container 
      fluid 
      className="d-flex align-items-center justify-content-center vh-80 bg-light"
      style={{ padding: '20px' }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 text-center rounded-4 p-4">
            <Card.Body>

          
             
              {/* Mensaje de Error Temático */}
              <h1 className="mb-4 text-secondary">
                ¡Ups! Parece que esta página se ha extraviado.
              </h1>
              
              <Card.Text className="lead text-dark">
                Lamentamos el inconveniente. Es posible que uno de nuestros gatitos haya jugado con el cable del servidor o que la dirección que ingresaste no exista.
              </Card.Text>

              {/* Imagen Ilustrativa */}
              <div className="my-4">
                <img 
                  src={fotoerror404} 
                  alt="Mascota Despistada" 
                  className="img-fluid rounded-circle border border-5 border-success"
                  style={{ maxWidth: '200px', height: 'auto' }}
                  // Manejo de error si la imagen no carga
                  onError={(e) => { e.target.onerror = null; e.target.src='../../public/img/error404.png'; }}
                />
              </div>

              {/* Botón de Acción */}
              <Button 
                variant="primary" 
                size="lg" 
                className="mt-3 shadow-sm"
                onClick={navigateToHome}
              >
                <i className="bi bi-house-door-fill me-2"></i> 
                Volver a la pagina de (Inicio)
              </Button>
              
              {/* Enlace de Soporte */}
              <p className="mt-3 text-muted small">
                Si crees que esto es un error, contacta a nuestro equipo de soporte.
              </p>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}


export default Error404;