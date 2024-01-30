import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const CustomFooter = () => {
  return (
    <Row className="g-0  ">
      <Col className="d-flex justify-content-center">
        <ListGroup className="flex-row   ">
          <ListGroup.Item className=" text-white py-4 border-0 ">
            Negozi
          </ListGroup.Item>
          <ListGroup.Item className="text-white py-4 border-0">
            Servizi
          </ListGroup.Item>
          <ListGroup.Item className=" text-white py-4 border-0">
            Area Clienti
          </ListGroup.Item>
          <ListGroup.Item className=" text-white py-4 border-0 ">
            Consegne
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};
export default CustomFooter;
