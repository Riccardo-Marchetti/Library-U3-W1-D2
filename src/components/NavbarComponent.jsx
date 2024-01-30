import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const CustomNavbar = () => {
  return (
    <Navbar>
      <Container className="mx-0 ps-4">
        <Navbar.Brand href="#home" className=" text-white">
          Logo
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" className=" text-white">
            Home
          </Nav.Link>
          <Nav.Link href="#features" className=" text-white">
            About
          </Nav.Link>
          <Nav.Link href="#pricing" className=" text-white">
            Browse
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;
