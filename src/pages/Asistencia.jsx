import { /*useEffect,*/ useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAttendanceAction } from "../redux/mainReducerDuck";
//import Results from "../components/Results";

const Asistencia = () => {
  const { isLoggedIn } = useSelector((state) => state.main);

  const [stdn, setStdn] = useState("");
  const dispatch = useDispatch();
  //const [data, setData] = useState([]);

  //const { students } = useSelector((state) => state.main);
  const handleChange = (e) => {
    setStdn(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAttendanceAction(stdn));
  };

  /*useEffect(() => {
    const res = students.filter((data) => data.studentNumber === stdn);
    setData( res );
  }, [stdn, students]);
*/
  if (!isLoggedIn) return <Navigate to="/" replace />;
  return (
    <Container className="mt-5 px-5" fluid>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Form.Control
                value={stdn}
                placeholder="Buscar por número de boleta"
                aria-label="Buscar alumno"
                aria-describedby="Buscar alumno"
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="outline-secondary"
                id="button-addon2"
              >
                Registrar asistencia
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      {/*
        stdn? <Results data={data} /> : <Results data={students} />
  */}
    </Container>
  );
};

export default Asistencia;
