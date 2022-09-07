import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAttendanceAction } from "../redux/mainReducerDuck";

const Results = ({ data }) => {
  const dispatch = useDispatch();
  const handleAssistance = (studentNumber) => {
    dispatch(getAttendanceAction(studentNumber));
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Número de boleta</th>
          <th></th>
        </tr>
      </thead>
      {data.map((item) => (
        <tbody key={item.studentNumber}>
          <tr>
            <td> {item.fullName} </td>
            <td> {item.studentNumber} </td>
            <td>
              {" "}
              <Button
                onClick={() => handleAssistance(item.studentNumber)}
                style={{ width: "100%" }}
              >
                {" "}
                Pasar lista{" "}
              </Button>{" "}
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  );
};

export default Results;
