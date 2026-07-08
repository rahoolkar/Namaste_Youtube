import { useState } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

function Comment({ replies, snippet }) {
  const commentDetails = snippet?.topLevelComment?.snippet;
  const { authorDisplayName, authorProfileImageUrl, textDisplay } =
    commentDetails;
  const [showReply, setShowReply] = useState(false);
  return (
    <div className="flex py-2">
      <div className="h-11 w-11 rounded-full overflow-hidden mx-4">
        <img src={authorProfileImageUrl} alt="" />
      </div>

      <div className="flex flex-col">
        <div>
          <p className="text-sm font-semibold hover:cursor-pointer">
            {authorDisplayName}
          </p>
          <p className="text-sm">{textDisplay}</p>
        </div>

        <div className="flex">
          <div className="px-2 py-2 hover:bg-gray-100 rounded-full">
            <AiOutlineLike></AiOutlineLike>
          </div>
          <div className="px-2 py-2 hover:bg-gray-100 rounded-full">
            <AiOutlineDislike></AiOutlineDislike>
          </div>
          <div
            onClick={() => {
              setShowReply(true);
            }}
            className="text-sm text-blue-500 font-semibold flex justify-center items-center mx-2 hover:cursor-pointer"
          >
            <span>Reply</span>
          </div>
        </div>
        {showReply && (
          <div className="flex">
            <input
              type="text"
              placeholder="Type here"
              className="border-b border-gray-500 w-1/2 placeholder:text-sm placeholder:text-gray-400 outline-none px-1"
            />
            <button
              onClick={() => {
                setShowReply(false);
              }}
              className="text-sm px-2 py-1 hover:bg-gray-100 rounded-full hover:cursor-pointer"
            >
              Cancel
            </button>
            <button
              className="text-sm px-2 py-1 hover:bg-gray-100 rounded-full hover:cursor-pointer font-semibold text-blue-500"
              onClick={() => {
                setShowReply(false);
              }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
      {replies && (
        <div className="flex flex-col ml-5">
          {replies?.comments.map((comment) => {
            return <Comment {...comment} key={comment.id}></Comment>;
          })}
        </div>
      )}
    </div>
  );
}

export default Comment;
