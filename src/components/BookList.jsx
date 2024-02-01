import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomSingleBook from "./SingleBook";
import { Component } from "react";
import bookHorror from "../Data/horror.json";

class ListBook extends Component {
  state = {
    name: "",
  };

  render() {
    return (
      <>
        <Container className="pt-4">
          <Row>
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Cerca</Button>
                </Col>
              </Row>
            </Form>
            {bookHorror
              .filter((books) =>
                books.title
                  .toLowerCase()
                  .includes(this.state.name.toLowerCase())
              )
              .map((books) => {
                return (
                  <CustomSingleBook bookHorror1={books} key={books.asin} />
                );
              })}
          </Row>
        </Container>
      </>
    );
  }
}
export default ListBook;
