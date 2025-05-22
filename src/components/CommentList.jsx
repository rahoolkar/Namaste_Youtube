import Comment from "./Comment";

function CommentList({ list }) {
  return (
    <div>
      {list.map((comment) => {
        return <Comment key={comment.id} data={comment}></Comment>;
      })}
    </div>
  );
}

export default CommentList;
