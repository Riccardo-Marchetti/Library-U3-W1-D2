import { Component } from "react";
import ListComment from "./CommentList";
import FormComment from "./AddComment";

class AreaComment extends Component {
  state = {
    comments: [],
  };

  fetchComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
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

  // componentDidMount() {
  //   this.fetchComment();
  // }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.asin !== this.props.asin) {
      this.fetchComment();
    }
  }
  render() {
    return (
      <div>
        <ListComment list={this.state.comments} />
        <FormComment asin={this.props.asin} />
      </div>
    );
  }
}
export default AreaComment;
