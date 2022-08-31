import { useSelector } from "react-redux";
import Formulario from "./components/Formulario";
import NavBar from "./components/NavBar";

function App() {
  const { fetching } = useSelector((state) => state.main);
  if (fetching) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "30px" }}>
        <Formulario />
      </div>
    </>
  );
}

export default App;
