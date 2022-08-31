import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: "#66023C" }} variant="dark">
      <Container>
        <Navbar.Brand>Club de algoritmia - UPIITA</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
