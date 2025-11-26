
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from "react";
import Login from './components/Login.jsx';
import ProtectorRutas from './components/routes/ProtectorRutas.jsx';

function App() {
  const usuarioSessionStorage =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);
  

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

 
  return (
    <BrowserRouter>
      <Navigation         usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}>
      </Navigation>

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
        
        <Route
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        /> 
          <Route
          path="/administrador"
          element={
            <ProtectorRutas usuarioLogueado={usuarioLogueado}></ProtectorRutas>
          }
        ></Route>
        <Route path="/registro" element={<Container className="mt-5"><h2>Registro</h2></Container>} />
        <Route path="/turnos" element={<Container className="mt-5"><h2>Solicitar Turno</h2></Container>} />
        <Route path="*" element={<Container className="mt-5"><h2>Error404</h2></Container>} />
      </Routes>
      
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <small>&copy; 2025 Veterinaria Rolling. Todos los derechos reservados.</small>
      </footer>

    </BrowserRouter>
  );
}

export default App;