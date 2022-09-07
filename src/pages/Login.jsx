import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";

const Login = () => {
  const { isLoggedIn } = useSelector((state) => state.main);
  if (isLoggedIn) return <Navigate to="/asistencia" replace />;
  return (
    <div style={{ paddingTop: "50px" }}>
      <LoginComponent />
    </div>
  );
};

export default Login;
