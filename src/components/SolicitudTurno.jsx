import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./solicitudTurno.css";
import { DateTime, Interval } from "luxon";

const SolicitudTurno = () => {
  const navigate = useNavigate();
  const [enviando, setEnviando] = useState(false);
  const [turnosExistentes, setTurnosExistentes] = useState([]);
  const [fecha, setFecha] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("turnos");
    if (stored) setTurnosExistentes(JSON.parse(stored));
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, dirtyFields },
    reset,
  } = useForm({ mode: "onChange" });

  const horaSeleccionada = watch("horaTurno");

  const validarSolapamiento = (fechaHoraISO) => {
    const nuevoInicio = DateTime.fromISO(fechaHoraISO);
    const nuevoFin = nuevoInicio.plus({ hours: 1 });
    const nuevoIntervalo = Interval.fromDateTimes(nuevoInicio, nuevoFin);

    for (const turno of turnosExistentes) {
      const inicioExistente = DateTime.fromISO(turno.inicio);
      const finExistente = inicioExistente.plus({ hours: turno.duracionHoras });
      const intervaloExistente = Interval.fromDateTimes(
        inicioExistente,
        finExistente
      );
      if (nuevoIntervalo.overlaps(intervaloExistente)) return false;
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
      Swal.fire("Error", "La fecha y hora deben ser futuras", "error");
      return;
    }

    if (fechaHora.weekday === 7) {
      Swal.fire("Error", "Los domingos no se pueden seleccionar", "error");
      return;
    }

    if (!validarSolapamiento(fechaHora.toISO())) {
      Swal.fire("Error", "El turno se solapa con otro existente", "error");
      return;
    }

    setEnviando(true);

    const nuevoTurno = {
      nombreApellido: data.nombreApellido,
      nombreMascota: data.nombreMascota,
      tipoMascota: data.tipoMascota,
      inicio: fechaHora.toISO(),
      duracionHoras: 1,
      email: data.email,
      motivo: data.motivo,
    };

    const turnosActualizados = [...turnosExistentes, nuevoTurno];
    localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
    setTurnosExistentes(turnosActualizados);

    await Swal.fire({
      icon: "success",
      title: "Turno registrado",
      text: `Turno para ${data.nombreMascota} registrado el ${fechaHora.toLocaleString(
        DateTime.DATETIME_MED
      )} y se envió un mail a ${data.email}`,
    });

    reset();
    setFecha(null);
    setEnviando(false);
  };

  const hoy = new Date();
  const horasDisponibles = [];
  for (let h = 8; h <= 16; h++) {
    horasDisponibles.push(`${h.toString().padStart(2, "0")}:00`);
    horasDisponibles.push(`${h.toString().padStart(2, "0")}:30`);
  }
  horasDisponibles.push("17:00");

  return (
    <Container className="mt-4 mainSection p-4">
      <h2 className="text-center mb-4">Solicitud de Turno</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={enviando}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  type="text"
                  {...register("nombreApellido", {
                    required: "Campo requerido",
                    minLength: { value: 3, message: "Debe contener al menos 3 caracteres" },
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/,
                      message: "Solo se permiten letras y espacios",
                    },
                  })}
                  isInvalid={!!errors.nombreApellido}
                  isValid={dirtyFields.nombreApellido && !errors.nombreApellido}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombreApellido?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre de la Mascota</Form.Label>
                <Form.Control
                  type="text"
                  {...register("nombreMascota", {
                    required: "Campo requerido",
                    minLength: { value: 2, message: "Debe contener al menos 2 caracteres" },
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/,
                      message: "Solo se permiten letras y espacios",
                    },
                  })}
                  isInvalid={!!errors.nombreMascota}
                  isValid={dirtyFields.nombreMascota && !errors.nombreMascota}
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
              {...register("tipoMascota", { required: "Seleccione un tipo" })}
              isInvalid={!!errors.tipoMascota}
              isValid={dirtyFields.tipoMascota && !errors.tipoMascota}
            >
              <option value="">Seleccione uno...</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Ave">Ave</option>
              <option value="Otro">Otro</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.tipoMascota?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Fecha del Turno</Form.Label>
                <DatePicker
                  selected={fecha}
                  onChange={(date) => setFecha(date)}
                  filterDate={(date) => date.getDay() !== 0}
                  minDate={hoy}
                  dateFormat="yyyy-MM-dd"
                  className={`form-control ${errors.fechaTurno ? "is-invalid" : ""}`}
                  wrapperClassName="w-100"
                  placeholderText="Seleccione una fecha"
                />
                {errors.fechaTurno && (
                  <div className="invalid-feedback d-block">{errors.fechaTurno.message}</div>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Hora del Turno</Form.Label>
                <Form.Select {...register("horaTurno", { required: "Campo requerido" })} isInvalid={!!errors.horaTurno}>
                  <option value="">Seleccione hora</option>
                  {horasDisponibles.map((hora) => (
                    <option key={hora} value={hora}>
                      {hora}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors.horaTurno?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Dirección de Email</Form.Label>
            <Form.Control
              type="email"
              {...register("email", {
                required: "Campo requerido",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },
              })}
              isInvalid={!!errors.email}
              isValid={dirtyFields.email && !errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Motivo de la Consulta</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("motivo", {
                required: "Campo requerido",
                minLength: { value: 5, message: "Debe contener más detalles" },
              })}
              isInvalid={!!errors.motivo}
              isValid={dirtyFields.motivo && !errors.motivo}
            />
            <Form.Control.Feedback type="invalid">{errors.motivo?.message}</Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-between mt-4">
            <Button variant="success" type="submit" disabled={!isValid || enviando}>
              {enviando ? "Enviando..." : "Enviar"}
            </Button>
            <Button variant="secondary" onClick={() => navigate("/")}>
              Cancelar
            </Button>
          </div>
        </fieldset>
      </Form>
    </Container>
  )
}

export default SolicitudTurno;