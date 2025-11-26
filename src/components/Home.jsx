import { Container } from 'react-bootstrap'
import SeccionDestacada from './SeccionDestacada'
import CardServicios from './CardServicios'

const Home = () => {
  return (
    <>
      <main>
        <section className="text-center">
          <h1 style={{ color: 'var(--vet-purple)', fontWeight: 'bold' }}>
            Bienvenido a Veterinaria Rolling
          </h1>

          <div className="me-auto ms-auto">
            <SeccionDestacada />
          </div>

          <p className="lead mt-3">
            Cuidamos a tus mascotas con el mejor equipo profesional.
          </p>
        </section>

        <Container className="my-5">
            <h3 className="text-center mb-4">Servicios y Profesionales</h3>
        <CardServicios />

        </Container>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <small>&copy; 2025 Veterinaria Rolling. Todos los derechos reservados.</small>
      </footer>
    </>
  )
}

export default Home
