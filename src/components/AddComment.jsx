import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class FormComment extends Component {
  state = {
    comments: {
      comment: "",
      rate: 1,
      elementId: this.props.comm,
    },
  };
  commentSubmit = (e) => {
    e.preventDefault();
    console.log("stato corrente", this.state.comments);
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.comments),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDEzNjE4N2U1YzAwMTgxNGM2MjMiLCJpYXQiOjE3MDY3ODk1MDMsImV4cCI6MTcwNzk5OTEwM30.oafxWOMDkvOclMSW2CZ_ZtFqr_nJSvnhsJvsdXXyCMs",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Prenotazione salvata correttamente!");
          this.setState({
            comments: {
              comment: "",
              rate: 1,
              elementId: "",
            },
          });
        } else {
          alert("La recensione non è stata salvata");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Form
        className="pt-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Lascia qui un tuo commento </Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            required
            value={this.state.comments.comment}
            onChange={(e) => {
              this.setState({
                comments: {
                  ...this.state.comments,
                  comment: e.target.value,
                },
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Lascia qua una tua valutazione</Form.Label>
          <Form.Select
            aria-label="voto"
            required
            value={this.state.comments.rate}
            onChange={(e) => {
              this.setState({
                comments: {
                  ...this.state.comments,
                  rate: e.target.value,
                },
              });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default FormComment;