import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (formData.nombre.trim().length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ingresá un email válido.";
    }

    if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setEnviado(true);

      console.log("Formulario enviado:", formData);

      // Limpiar
      setFormData({ nombre: "", email: "", mensaje: "" });

      // Ocultar alerta después de 3 segundos (opcional)
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  return (
    <div className="p-4" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2 className="mb-4 text-center">Contacto</h2>

      {enviado && <Alert variant="success">¡Mensaje enviado con éxito!</Alert>}

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tu nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            isInvalid={!!errors.nombre}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nombre}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="tuemail@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Escribí tu mensaje..."
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            isInvalid={!!errors.mensaje}
          />
          <Form.Control.Feedback type="invalid">
            {errors.mensaje}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Contacto;