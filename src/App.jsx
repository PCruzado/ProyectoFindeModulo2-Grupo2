import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section className="bg-light p-5 text-center shadow-sm">
                 <h1 style={{ color: 'var(--vet-purple)', fontWeight: 'bold' }}>
                   Bienvenido a Veterinaria Rolling
                 </h1>
                 <p className="lead text-muted">
                   Cuidado profesional y cariño para tus mascotas.
                 </p>
              </section>
              
              <Container className="my-5">
                 <p className="text-center text-muted">
                   (Aquí irá el contenido principal, cards, carrusel, etc.)
                 </p>
              </Container>
            </>
          } />
          
          <Route path="/login" element={<Container className="mt-5"><h2>Login</h2></Container>} />
          <Route path="/registro" element={<Container className="mt-5"><h2>Registro</h2></Container>} />
          <Route path="/turnos" element={<Container className="mt-5"><h2>Solicitar Turno</h2></Container>} />
          <Route path="/contacto" element={<Container className="mt-5"><h2>Contacto</h2></Container>} />
          <Route path="/about" element={<Container className="mt-5"><h2>Sobre Nosotros</h2></Container>} />
          <Route path="/error404" element={<Container className="mt-5"><h2>Error 404</h2></Container>} />
        </Routes>
      </main>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;