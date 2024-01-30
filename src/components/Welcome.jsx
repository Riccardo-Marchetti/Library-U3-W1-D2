import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const WelcomeAllert = () => {
  return (
    <>
      {["secondary"].map((variant) => (
        <Container key={"alert"}>
          <Row className=" mt-2">
            <Col sm={12} md={8} xl={6} className="me-auto ms-auto">
              <Alert variant={variant} className="text-center">
                Benvenuti nel mio negozio di libri Horror!
              </Alert>
            </Col>
          </Row>
        </Container>
      ))}
    </>
  );
};
export default WelcomeAllert;
