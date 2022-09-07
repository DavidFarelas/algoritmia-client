import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Asistencia from "../pages/Asistencia";
import Formul from "../pages/Formul";
import Login from "../pages/Login";
import { persistentLoginAction } from "../redux/mainReducerDuck";

const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      dispatch(persistentLoginAction());
    }
    //eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="asistencia" element={<Asistencia />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Formul />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
