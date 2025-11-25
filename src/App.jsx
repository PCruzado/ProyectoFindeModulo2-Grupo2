import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';
import SolicitudTurno from "./components/SolicitudTurno"

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={
          <main>
            <section className="bg-light p-5 text-center">
               <h1 style={{ color: 'var(--vet-purple)', fontWeight: 'bold' }}>
                 Bienvenido a Veterinaria Rolling
               </h1>
               <p className="lead">
                 Cuidamos a tus mascotas con el mejor equipo profesional.
               </p>
            </section>

            <Container className="my-5">
              <h3 className="text-center mb-4">Servicios y Profesionales</h3>
              <p className="text-center text-muted">
                (Aquí irán las cards de profesionales y servicios más adelante)
              </p>
            </Container>
          </main>
        } />
        
        <Route path="/login" element={<Container className="mt-5"><h2>Login</h2></Container>} />
        <Route path="/registro" element={<Container className="mt-5"><h2>Registro</h2></Container>} />
        <Route path="/turnos" element={<SolicitudTurno />} />
        <Route path="/Error404" element={<Container className="mt-5"><h2>Error404</h2></Container>} />
      </Routes>
      
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <small>&copy; 2025 Veterinaria Rolling. Todos los derechos reservados.</small>
      </footer>

    </BrowserRouter>
  );
}

export default App;