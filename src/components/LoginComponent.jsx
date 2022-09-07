import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startLoginAction } from "../redux/mainReducerDuck";

const LoginComponent = () => {
  const initialData = {
    username: "",
    password: "",
  };

  const dispatch = useDispatch();
  const [values, setValues] = useState(initialData);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginAction(values));
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
      INICIAR SESIÓN
      <hr />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  name="username"
                  value={values.username}
                  type="text"
                  placeholder="Ingresa usuario"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="Ingresa contraseña"
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginComponent;
