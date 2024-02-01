import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import AreaComment from "./CommentArea";
import bookHorror from "../Data/horror.json";
import { Component } from "react";

class CustomSingleBook extends Component {
  state = {
    selected: false,
  };
  selectedClick = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    const cardClass = this.state.selected ? "selectedCard" : "";
    return (
      <>
        <Col
          key={this.props.bookHorror1.asin}
          xs={8}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          xxl={2}
          className="mb-5 ms-auto me-auto "
        >
          <Card
            style={{ height: "100%" }}
            className={cardClass}
            onClick={this.selectedClick}
          >
            <Card.Img
              variant="top"
              src={this.props.bookHorror1.img}
              style={{ height: "300px" }}
            />
            <Col className="d-flex">
              <Card.Body className="d-flex flex-column justify-content-evenly ">
                <div>
                  <Card.Title>{this.props.bookHorror1.title}</Card.Title>
                </div>
                <div>
                  <Card.Text className="m-0">
                    Category : {this.props.bookHorror1.category}
                  </Card.Text>
                  <Card.Text>{this.props.bookHorror1.price} €</Card.Text>
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
        {this.state.selected && (
          <AreaComment comm={this.props.bookHorror1.asin} />
        )}
      </>
    );
  }
}
export default CustomSingleBook;
