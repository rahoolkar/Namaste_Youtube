import { useState } from "react";
import CommentList from "./CommentList";

function Comment({ data }) {
  let [showReplies, setShowReplies] = useState(false);

  function handleButtonClick() {
    setShowReplies(!showReplies);
  }
  let { username, comment, likes, dislikes, replies } = data;
  return (
    <>
      <div className="flex my-2">
        <img
          className="h-10 w-10 mx-1"
          src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
          alt="default-pfp"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-bold">@{username}</h3>
          <p>{comment}</p>
          <div className="flex justify-between items-baseline">
            <i className="fa-regular fa-thumbs-up p-2 rounded-4xl hover:bg-gray-200"></i>
            <p>{likes}</p>
            <i className="fa-regular fa-thumbs-down p-2 rounded-4xl hover:bg-gray-200"></i>
            <p>{dislikes}</p>
            <button className="text-xs text-blue-500 p-2 rounded-4xl font-bold hover:bg-gray-200">
              Reply
            </button>
          </div>
          <div>
            {showReplies === false ? (
              <button
                className="p-1 rounded-4xl text-blue-500 font-bold text-sm hover:bg-gray-200"
                onClick={handleButtonClick}
              >
                <span className="mx-1">
                  <i className="fa-solid fa-angle-up"></i>
                </span>
                {replies.length} reply
              </button>
            ) : (
              <button className="rounded-4xl p-1 text-blue-500 font-bold text-sm hover:bg-gray-200" onClick={handleButtonClick}>
                <span className="mx-1">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
                {replies.length} reply
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="ml-9">
        {showReplies ? <CommentList list={replies}></CommentList> : null}
      </div>
    </>
  );
}

export default Comment;
