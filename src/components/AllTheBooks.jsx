import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import HorrorBooks from "../Data/horror.json";

const AllBooks = () => {
  return (
    <>
      <Container className="pt-4">
        <Row>
          {HorrorBooks.map((book) => {
            return (
              <Col
                key={book.asin}
                xs={8}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                xxl={2}
                className="mb-4 ms-auto me-auto"
              >
                <Card style={{ height: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={book.img}
                    style={{ height: "300px" }}
                  />
                  <Col className="d-flex">
                    <Card.Body className="d-flex flex-column justify-content-evenly ">
                      <div>
                        <Card.Title>{book.title}</Card.Title>
                      </div>
                      <div>
                        <Card.Text className="m-0">
                          Category : {book.category}
                        </Card.Text>
                        <Card.Text>{book.price} €</Card.Text>
                      </div>
                      <div className="d-flex mt-3">
                        <Button className="col-12 bg-black border-white">
                          Acquista
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default AllBooks;
