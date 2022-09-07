import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Formulario from "../components/Formulario";

const Formul = () => {
  const { isLoggedIn } = useSelector((state) => state.main);
  if (isLoggedIn) return <Navigate to="/asistencia" replace />;
  return (
    <div style={{ paddingTop: "30px" }}>
      <Formulario />
    </div>
  );
};

export default Formul;
