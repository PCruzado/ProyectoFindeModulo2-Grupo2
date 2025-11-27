import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

/*import { useState } from 'react';*/

import Modal from 'react-bootstrap/Modal';


const Login = ({ setUsuarioLogueado, show, handleClose, handleShow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
  const userEmail = import.meta.env.VITE_EMAIL ?? 'veterinaria@admin.com';
    const userPassword = import.meta.env.VITE_PASSWORD ?? 'Aa12345*a';

    if (
      data.email === userEmail &&
      data.password === userPassword

    ) {
      //actualizar el state de la sesion del usuario
      setUsuarioLogueado(true)
      
      Swal.fire({
        title: "Bienvienido a la administración",
        text: "Ingresando al sistema",
        icon: "success",
        //redireccionaria a la papgina del administrador
      });
      navegacion('/administrador')
      handleClose()
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Credenciales incorrectas",
        icon: "error",
      });
    }
  };


    return (
        <main>
              <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className="text-orange">
          <Modal.Title className="title-sombra"><h1 >Iniciar sesión</h1></Modal.Title>
        </Modal.Header>
        <div className="contenedor-fondo">
 <Modal.Body >
         
            <Form onSubmit={(event

            ) => {
              event.preventDefault()
              handleSubmit(onSubmit)()
            }
            } noValidate>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email "
                  placeholder="usuario@email.com"
                  {...register("email", {
                    required: "El email es un dato obligatorio",
                    pattern: {
                      value:
                       /^\S+@\S+\.\S+$/,
                      message:
                        "El email es incorrecto",
                    },
                  })}
                />
                <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  {...register("password", {
                    required: "La contraseña es un dato obligatorio",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/,
                      message:
                        "La contraseña debe tener entre 6 y 10 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <div className="d-flex flex-column align-items-end">
                <Button variant="primary" type="submit" className="btn-send-shadow">
                  Enviar
                </Button>
                <Button variant="link" className=" p-1 mt-2" 
                  to={"/administrador"}>
                  Recuperar contraseña
                </Button>
              </div>

            </Form>
          

        </Modal.Body>
        </div>
       

      </Modal>
        </main>
    );
};

export default Login;
/*vale*/