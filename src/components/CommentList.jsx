import Comment from "./Comment";

function CommentList({ list }) {
  return (
    <div>
      {list.map((comment) => {
        return (
          <div className="bg-gray-100"> 
            <Comment key={comment.id} data={comment}></Comment>;
            <div className="mx-5">
              <CommentList list={comment.replies}></CommentList>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentList;
