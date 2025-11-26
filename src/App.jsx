import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import CardServicios from './components/CardServicios';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Container className="mt-5"><h2>Login</h2></Container>} />
        <Route path="/registro" element={<Container className="mt-5"><h2>Registro</h2></Container>} />
        <Route path="/turnos" element={<Container className="mt-5"><h2>Solicitar Turno</h2></Container>} />
        <Route path="/servicios" element={<CardServicios />} />
        <Route path="/Error404" element={<Container className="mt-5"><h2>Error404</h2></Container>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;