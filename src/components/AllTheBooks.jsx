import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HorrorBooks from "../Data/horror.json";

const AllBooks = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          {HorrorBooks.map((book) => {
            return (
              <Col
                key={book.asin}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                xxl={2}
                className="mb-4"
              >
                <Card style={{ height: "100%" }}>
                  <Card.Img
                    variant="top"
                    src={book.img}
                    style={{ height: "300px" }}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>category : {book.category}</Card.Text>
                    <Card.Text>{book.price} €</Card.Text>
                  </Card.Body>
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
