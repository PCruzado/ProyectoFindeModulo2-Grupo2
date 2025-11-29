import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";

const Administracion = () => {
  const [turnos, setTurnos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("turnos");
    if (stored) setTurnos(JSON.parse(stored));
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Administración de Turnos</h2>
        <Button variant="success" onClick={() => navigate("/turnos")}>
          Agregar Turno
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre y Apellido</th>
            <th>Nombre Mascota</th>
            <th>Tipo Mascota</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Motivo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center">
                No hay turnos registrados
              </td>
            </tr>
          )}
          {turnos.map((turno, index) => {
            const dt = DateTime.fromISO(turno.inicio);
            return (
              <tr key={index}>
                <td>{turno.nombreApellido}</td>
                <td>{turno.nombreMascota}</td>
                <td>{turno.tipoMascota}</td>
                <td>{dt.toLocaleString(DateTime.DATE_SHORT)}</td>
                <td>{dt.toLocaleString(DateTime.TIME_SIMPLE)}</td>
                <td>{turno.motivo}</td>
                <td className="d-flex gap-2">
                  <Button variant="primary" size="sm">Modificar</Button>
                  <Button variant="info" size="sm">Ver</Button>
                  <Button variant="danger" size="sm">Borrar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Administracion;
