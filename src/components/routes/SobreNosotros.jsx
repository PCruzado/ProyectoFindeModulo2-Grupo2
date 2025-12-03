

import { Container, Row, Col, Card,} from 'react-bootstrap';



const equipoDesarrollo = [
  {
    id: 1,
    nombre: 'Basualdo Lucas',
    rol: 'Director',
    bio: 'Director de la clínica. Especialista en cirugía de tejidos blandos.',
    foto: 'data:image/jpeg;base64,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', 
  },
  {
    id: 2,
    nombre: 'Cruzado Pablo',
    rol: 'Veterinario General',
    bio: 'Experto en el diagnóstico de enfermedades internas y tratamientos complejos.',
    foto: 'https://png.pngtree.com/png-clipart/20240318/original/pngtree-doctor-cartoon-character-professional-doctor-png-image_14620547.png',
  },
  {
    id: 3,
    nombre: 'Stakelun Valeria',
    rol: 'Especialista en Fauna Exótica',
    bio: 'Dedicada al cuidado de reptiles, aves y pequeños mamíferos.',
    foto: 'https://www.shutterstock.com/image-vector/female-doctor-writing-something-notebook-600nw-2557338789.jpg',
  },
  {
    id: 4,
    nombre: 'Bulacio Nicolas',
    rol: 'Técnico Veterinario Certificado',
    bio: 'Asiste en laboratorio, radiología y cuidados postoperatorios.',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfDB5KWedTFgnleVwqyj5wj1vL5N5Nv9yzQ&s',
  },
  {
    id: 5,
    nombre: 'Dentesano Emiliano',
    rol: 'Atención Primaria y Vacunación',
    bio: 'Enfocado en medicina preventiva y el bienestar diario de las mascotas.',
    foto: 'https://png.pngtree.com/png-clipart/20250223/original/pngtree-cartoon-character-hand-drawn-character-illustration-hospital-doctors-picture-image_3932333.png',
  },
];


const SobreNosotros = () => {
  return (
    <Container className="my-5">
      
    
      <Row className="mb-5 p-4 rounded shadow-sm bg-light">
        <Col md={12} className="text-center">
          <h2 className="display-4 fw-bold texto-naranja  mb-3">Nuestra Historia: Cuidando Mascotas desde 1980</h2>
          <p className="lead text-secondary">
            Todo comenzó con un gran amor por los animales.
          </p>
        </Col>
        <Col md={10} className="mx-auto mt-3">
          <p>
            La Clínica Veterinaria Rolling abrió sus puertas hace más de 40 años con la misión de ofrecer atención médica de la más alta calidad y un trato cálido para cada paciente. Desde un pequeño consultorio en el barrio, hemos crecido hasta convertirnos en un centro de referencia en la región, equipados con tecnología de última generación para diagnóstico, cirugía y hospitalización.
          </p>
          <p>
            Creemos firmemente que la prevención es la clave para una vida larga y saludable. Nuestro compromiso es educar a los dueños y construir una relación de confianza duradera, poniendo siempre el bienestar de tu compañero peludo, emplumado o escamado en primer lugar.
          </p>
         
        </Col>
      </Row>

      <hr className="my-5" />

      
      <Row className="text-center mb-4">
        <Col>
          <h2 className="fw-bold texto-naranja">
            Conoce a nuestros veterinarios
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
                
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default SobreNosotros;