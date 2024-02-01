import { Component } from "react";
import ListComment from "./CommentList";
import FormComment from "./AddComment";

class AreaComment extends Component {
  state = {
    comments: [],
  };
  fetchComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.comm,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDEzNjE4N2U1YzAwMTgxNGM2MjMiLCJpYXQiOjE3MDY3ODk1MDMsImV4cCI6MTcwNzk5OTEwM30.oafxWOMDkvOclMSW2CZ_ZtFqr_nJSvnhsJvsdXXyCMs",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((arrayOfComments) => {
        this.setState({
          comments: arrayOfComments,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    console.log("sono componentDiMount");
    this.fetchComment();
  }
  render() {
    console.log(
      "sono render! valore di this.state.comment:",
      this.state.comments
    );
    return (
      <>
        <div>
          <ListComment list={this.state.comments} />
          <FormComment as={this.props.comm} />
        </div>
      </>
    );
  }
}
export default AreaComment;