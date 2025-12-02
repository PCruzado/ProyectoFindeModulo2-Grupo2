import { Navigate } from "react-router-dom";
import Administracion from "./Administracion.jsx";

const ProtectorRutas = ({ usuarioLogueado }) => {
  if (!usuarioLogueado) return <Navigate to="/" />;
  return <Administracion />;
};

export default ProtectorRutas;
