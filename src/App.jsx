import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import SolicitudTurno from "./components/SolicitudTurno";
import { useEffect, useState } from "react";
import Login from './components/Login.jsx';
import ProtectorRutas from './components/routes/ProtectorRutas.jsx';
import Error404 from './components/Error404.jsx';
import SeccionDestacada from './components/SeccionDestacada';
import Contacto from './components/Contacto.jsx';
import CardServicios from './components/CardServicios.jsx';
import SobreNosotros from './components/routes/SobreNosotros.jsx';
import Registro from './components/Registro.jsx';


function App() {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  return (
    <BrowserRouter>
      <Navigation usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section className="text-center">
                <div className="me-auto ms-auto">
                  <SeccionDestacada />
                </div>
              </section>
              <Container className="my-5">
                <h3 className="text-center mb-4">Servicios y Profesionales</h3>
                <CardServicios />
              </Container>
            </>
          } />
          <Route path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} />
          <Route path="/administrador" element={<ProtectorRutas usuarioLogueado={usuarioLogueado} />} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/turnos" element={<SolicitudTurno />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route path="/about" element={<SobreNosotros className="mt-5"><h2>Sobre Nosotros</h2></SobreNosotros>} />

          <Route path="*" element={<Error404></Error404>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
