import ListGroup from "react-bootstrap/ListGroup";
import FormComment from "./AddComment";
const ListComment = (props) => {
  return (
    <>
      <ListGroup>
        {props.list.map((comment) => (
          <ListGroup.Item key={comment._id}>
            {comment.rate} - {comment.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
      {/* <SingleComment /> */}
    </>
  );
};
export default ListComment;
