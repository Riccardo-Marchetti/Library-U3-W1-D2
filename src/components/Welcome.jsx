import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const WelcomeAllert = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Row className="m-0 pb-2">
        <Col sm={11} md={9} lg={8} xxl={7} className="  me-auto ms-auto">
          <Alert
            className=" border-0  text-center text-black "
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading className="fs-4  ">
              Qua puoi trovare moltissimi libri Horror!
            </Alert.Heading>
            <p className="fs-5  ">
              Registrati per restare sempre aggiornato sulle nuove uscite
            </p>
          </Alert>
        </Col>
      </Row>
    );
  }
  return (
    <Row className="pb-4  ">
      <Col className="d-flex justify-content-center ">
        <Button
          className="bg-black border-white  "
          onClick={() => setShow(true)}
        >
          Mostra di più
        </Button>
      </Col>
    </Row>
  );
};
export default WelcomeAllert;
