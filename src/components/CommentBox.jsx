import CommentList from "./CommentList";

const commentsData = [
  {
    id: "a",
    username: "rahulkar",
    comment: "nice video",
    likes: 100,
    dislikes: 18,
    replies: [
      {
        id: "b",
        username: "amritakar",
        comment: "2023 video",
        likes: 90,
        dislikes: 5,
        replies: [
          {
            id: "c",
            username: "udayankar",
            comment: "hard working video",
            likes: 22,
            dislikes: 1,
            replies: [],
          },
        ],
      },
      {
        id: "d",
        username: "shivangikapoor",
        comment: "cat exam 2025 video",
        likes: 2,
        dislikes: 15,
        replies: [],
      },
    ],
  },
  {
    id: "e",
    username: "udayankar",
    comment: "hard working video",
    likes: 22,
    dislikes: 1,
    replies: [],
  },
  {
    id: "f",
    username: "amritakar",
    comment: "2023 video",
    likes: 90,
    dislikes: 5,
    replies: [],
  },
  {
    id: "g",
    username: "utpalkar",
    comment: "well explained video",
    likes: 34,
    dislikes: 17,
    replies: [
      {
        id: "h",
        username: "udayankar",
        comment: "hard working video",
        likes: 22,
        dislikes: 1,
        replies: [
          {
            id: "x",
            username: "udayankar",
            comment: "hard working video",
            likes: 22,
            dislikes: 1,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "y",
    username: "shivangikapoor",
    comment: "cat exam 2025 video",
    likes: 200,
    dislikes: 15,
    replies: [],
  },
];

function CommentBox() {
  return (
    <div className="my-5 w-full">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList list={commentsData}></CommentList>
    </div>
  );
}

export default CommentBox;
