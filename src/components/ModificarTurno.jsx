import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./solicitudTurno.css";
import { DateTime, Interval } from "luxon";

const ModificarTurno = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const turnoOriginal = location.state;

  const [turnosExistentes, setTurnosExistentes] = useState([]);
  const [fecha, setFecha] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("turnos");
    if (stored) setTurnosExistentes(JSON.parse(stored));

    if (turnoOriginal) {
      const inicioDT = DateTime.fromISO(turnoOriginal.inicio);
      setFecha(inicioDT.toJSDate());

      setValue("nombreApellido", turnoOriginal.nombreApellido);
      setValue("nombreMascota", turnoOriginal.nombreMascota);
      setValue("tipoMascota", turnoOriginal.tipoMascota);
      setValue("horaTurno", inicioDT.toFormat("HH:mm"));
      setValue("email", turnoOriginal.email);
      setValue("motivo", turnoOriginal.motivo);
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid, dirtyFields },
  } = useForm({ mode: "onChange" });

  const horaSeleccionada = watch("horaTurno");

  // 🔥 VALIDACIÓN DE SOLAPAMIENTO (excepto con el mismo turno)
  const validarSolapamiento = (fechaHoraISO) => {
    const nuevoInicio = DateTime.fromISO(fechaHoraISO);
    const nuevoFin = nuevoInicio.plus({ hours: 1 });
    const nuevoIntervalo = Interval.fromDateTimes(nuevoInicio, nuevoFin);

    for (const turno of turnosExistentes) {
      if (turno.inicio === turnoOriginal.inicio) continue; // ignorar el mismo turno

      const inicioExist = DateTime.fromISO(turno.inicio);
      const finExist = inicioExist.plus({ hours: turno.duracionHoras });

      const intervaloExist = Interval.fromDateTimes(inicioExist, finExist);

      if (nuevoIntervalo.overlaps(intervaloExist)) return false;
    }

    return true;
  };

  const onSubmit = async (data) => {
    if (!fecha || !horaSeleccionada) {
      Swal.fire("Error", "Debes seleccionar fecha y hora", "error");
      return;
    }

    const fechaISO = DateTime.fromJSDate(fecha)
      .set({
        hour: parseInt(horaSeleccionada.split(":")[0], 10),
        minute: parseInt(horaSeleccionada.split(":")[1], 10),
      })
      .toISO();

    const fechaHora = DateTime.fromISO(fechaISO);

    if (fechaHora < DateTime.now()) {
      Swal.fire("Error", "La fecha debe ser futura", "error");
      return;
    }

    if (fechaHora.weekday === 7) {
      Swal.fire("Error", "Los domingos no se atiende", "error");
      return;
    }

    if (!validarSolapamiento(fechaHora.toISO())) {
      Swal.fire("Error", "El turno se solapa con otro existente", "error");
      return;
    }

    const turnoModificado = {
      ...turnoOriginal,
      ...data,
      inicio: fechaHora.toISO(),
    };

    const turnosActualizados = turnosExistentes.map((t) =>
      t.inicio === turnoOriginal.inicio ? turnoModificado : t
    );

    localStorage.setItem("turnos", JSON.stringify(turnosActualizados));

    await Swal.fire({
      icon: "success",
      title: "Turno actualizado",
      text: "Los cambios han sido guardados correctamente",
    });

    navigate("/administrador");
  };

  // horarios
  const hoy = new Date();
  const horasDisponibles = [];
  for (let h = 8; h <= 16; h++) {
    horasDisponibles.push(`${h.toString().padStart(2, "0")}:00`);
    horasDisponibles.push(`${h.toString().padStart(2, "0")}:30`);
  }
  horasDisponibles.push("17:00");

  return (
    <Container className="mt-4 mainSection p-4">
      <h2 className="text-center mb-4">Modificar Turno</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                {...register("nombreApellido", {
                  required: "Campo requerido",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                })}
                isInvalid={!!errors.nombreApellido}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombreApellido?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Mascota</Form.Label>
              <Form.Control
                type="text"
                {...register("nombreMascota", {
                  required: "Campo requerido",
                })}
                isInvalid={!!errors.nombreMascota}
              />
              <Form.Control.Feedback type="invalid">
                {errors.nombreMascota?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Tipo de Mascota</Form.Label>
          <Form.Select
            {...register("tipoMascota", { required: "Campo requerido" })}
            isInvalid={!!errors.tipoMascota}
          >
            <option value="">Seleccione uno</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave</option>
            <option value="Otro">Otro</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Fecha</Form.Label>
              <DatePicker
                selected={fecha}
                onChange={(date) => setFecha(date)}
                filterDate={(date) => date.getDay() !== 0}
                minDate={hoy}
                dateFormat="yyyy-MM-dd"
                className="form-control"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Hora</Form.Label>
              <Form.Select
                {...register("horaTurno", { required: "Campo obligatorio" })}
              >
                <option value="">Seleccione hora</option>
                {horasDisponibles.map((hora) => (
                  <option key={hora} value={hora}>
                    {hora}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", {
              required: "Campo requerido",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Email inválido",
              },
            })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Motivo</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("motivo", {
              required: "Campo requerido",
              minLength: { value: 5, message: "Debe ser más descriptivo" },
            })}
            isInvalid={!!errors.motivo}
          />
        </Form.Group>

        <div className="d-flex justify-content-between mt-4">
          <Button variant="primary" type="submit" onClick={() => navigate("/administrador")}>
            Guardar Cambios
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigate("/administrador")}
          >
            Cancelar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ModificarTurno;
