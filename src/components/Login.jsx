import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";

import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';


const Login = ({setUsuarioLogueado, show, handleClose}) => {
    cost {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm();
    cont navegacion = useNavigate()
    
    return (
        <main>
            <Modal show={show} onHide={handleClse}>
                <Modal.Header closeButton className="texte-orage">
                    <Modal.Title claseName="title-sombra">Iniciar Sesión

                    </Modal.Title>
                </Modal.Header>
<div>
<Form  onSubmit={(event

            ) => {
              event.preventDefault()
              handleSubmit(onSubmit)()
            }
            }>
    <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email</Form.Label>
<Form.Control
                  type="email"
                  placeholder="usuario@email.com"
                  {...register("email", {
                    required: "El email es un dato obligatorio",
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message:
                        "El email debe cumplir con el siguiente formato correo@dominio.extension",
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
                        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                      message:
                        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <div>
                <Button variant="primary" type="submit" className="btn-send-shadow">
                    Enviar </Button>
                    <Button className="nav-link text-primary mt-2 btn-recover-password">
                        Recuperar contraseña
                    </Button>
              </div>

</Form>
</div>
            </Modal>
        </main>
    );
};

export default Login;