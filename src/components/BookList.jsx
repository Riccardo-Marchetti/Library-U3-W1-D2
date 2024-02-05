import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomSingleBook from "./SingleBook";
import { Component } from "react";
import AreaComment from "./CommentArea";

class ListBook extends Component {
  state = {
    name: "",
    selected: false,
  };
  changeAsin = (as) => {
    this.setState({ selected: as });
  };

  render() {
    return (
      <>
        <Container className="pt-4">
          <Row>
            <Col md={8}>
              <Row className="justify-content-center mt-5">
                <Col xs={12} md={4} className="text-center">
                  <Form.Group>
                    <Form.Control
                      type="search"
                      placeholder="Cerca un libro"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="g-2 mt-3 ">
                {this.props.books
                  .filter((books) =>
                    books.title
                      .toLowerCase()
                      .includes(this.state.name.toLowerCase())
                  )
                  .map((books) => {
                    return (
                      <Col xs={12} md={3} key={books.asin}>
                        <CustomSingleBook
                          book={books}
                          selected={this.state.selected}
                          changeAsin={this.changeAsin}
                        />
                      </Col>
                    );
                  })}
              </Row>
            </Col>
            <Col md={4} className="mt-5">
              {this.state.asin !== "" && (
                <AreaComment asin={this.state.selected} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default ListBook;
