import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Swal from "sweetalert2";

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [errorEmail, setErrorEmail] = useState("");
  
  

  useEffect(() => {
    const stored = localStorage.getItem("registroUsuarios");
    if (stored) setUsuarios(JSON.parse(stored));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // Obtener los datos ingresados
    const nuevoUsuario = {
      nombre: form.validationCustom01.value,
      apellido: form.validationCustom02.value,
      email: form.validationCustomUsername.value,
      password: form.validationCustom03.value,
    };

    // Validar si ya existe el email
    const emailExiste = usuarios.some(
      (u) => u.email.toLowerCase() === nuevoUsuario.email.toLowerCase()
    );

    if (emailExiste) {
      setErrorEmail("Este email ya está registrado.");
      return;
    } else {
      setErrorEmail("");
    }

    // Guardar en el estado y localStorage
    const nuevosUsuarios = [...usuarios, nuevoUsuario];
    setUsuarios(nuevosUsuarios);
    localStorage.setItem("registroUsuarios", JSON.stringify(nuevosUsuarios));

    // alert("Usuario registrado exitosamente!");
    Swal.fire({
            title: "Usuario registrado exitosamente!",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          })
    form.reset();
    setValidated(false);
  };

  return (
    <Container className="mt-4 p-4">
      <h2 className="text-center mb-4">Registro</h2>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control required type="text" placeholder="Nombre" minLength={3}/>
            <Form.Control.Feedback type="invalid">
              Debe contener al menos 3 caracteres
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control required type="text" placeholder="Apellido" minLength={3}/>
            <Form.Control.Feedback type="invalid">
              Debe contener al menos 3 caracteres
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="ejemplo@email.com"
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un Email válido.
              </Form.Control.Feedback>
            </InputGroup>

            {errorEmail && (
              <p className="text-danger fw-bold mt-1">{errorEmail}</p>
            )}
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,10}$"
            />
            <Form.Control.Feedback type="invalid">
              La contraseña debe tener entre 6 y 10 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Acepto los términos y condiciones"
            feedback="Debes aceptar para poder registrarte."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
  );
}

export default FormExample;
