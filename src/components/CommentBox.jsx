import Comment from "./Comment";

function CommentBox() {
  return (
    <div>
      <h1 className="font-bold text-lg">Comments</h1>
      <div>
        {comments.map((comment) => {
          return <Comment {...comment} key={comment.id}></Comment>;
        })}
      </div>
    </div>
  );
}

export default CommentBox;
