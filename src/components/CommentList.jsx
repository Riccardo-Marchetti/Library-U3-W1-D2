import ListGroup from "react-bootstrap/ListGroup";

const ListComment = (props) => {
  return (
    <ListGroup>
      {props.comments.map((comment) => (
        <ListGroup.Item>
          {comment.rate} - {comment.comment}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default ListComment;
