import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startSendFormAction } from "../redux/mainReducerDuck";

const Formulario = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    studentNumber: "",
  };
  const [values, setValues] = useState(initialValues);

  const { email, name, studentNumber } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues(initialValues);
    dispatch(startSendFormAction(values));
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "75%",
        border: "3px solid #66023C",
        borderRadius: "20px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Ingresa tu correo electrónico"
            onChange={(e) => handleChange(e)}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Ingresa tu nombre completo"
            onChange={(e) => handleChange(e)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Número de boleta</Form.Label>
          <Form.Control
            name="studentNumber"
            type="text"
            placeholder="Ingresa tu número de boleta"
            onChange={(e) => handleChange(e)}
            value={studentNumber}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
