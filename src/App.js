import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import AppRouter from "./routes/AppRouter";

function App() {
  const { fetching } = useSelector((state) => state.main);
  if (fetching) {
    return <div>Cargando...</div>;
  }
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
}

export default App;
