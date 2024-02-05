import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Component } from "react";

class CustomSingleBook extends Component {
  render() {
    return (
      <>
        <Card
          key={this.props.asin}
          onClick={() => this.props.changeAsin(this.props.book.asin)}
          style={{
            height: "100%",
            border:
              this.props.selected === this.props.book.asin
                ? "3px solid red"
                : "none",
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            style={{ height: "300px" }}
          />
          <Col className="d-flex">
            <Card.Body className="d-flex flex-column justify-content-evenly ">
              <div>
                <Card.Title>{this.props.book.title}</Card.Title>
              </div>
              <div>
                <Card.Text className="m-0">
                  Category : {this.props.book.category}
                </Card.Text>
                <Card.Text>{this.props.book.price} €</Card.Text>
              </div>
              <div className="d-flex mt-3">
                <Button className="col-12 bg-black border-white">
                  Acquista
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Card>
      </>
    );
  }
}
export default CustomSingleBook;
