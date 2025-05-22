import CommentList from "./CommentList";

const commentsData = [
  {
    id: "abc123",
    username: "rahulkar",
    comment: "nice video",
    likes: 100,
    dislikes: 18,
    replies: [
      {
        id: "abc789123",
        username: "amritakar",
        comment: "2023 video",
        likes: 90,
        dislikes: 5,
        replies: [
          {
            id: "abc456123123",
            username: "udayankar",
            comment: "hard working video",
            likes: 22,
            dislikes: 1,
            replies: [],
          },
        ],
      },
      {
        id: "efg456456",
        username: "shivangikapoor",
        comment: "cat exam 2025 video",
        likes: 2,
        dislikes: 15,
        replies: [],
      },
    ],
  },
  {
    id: "abc456",
    username: "udayankar",
    comment: "hard working video",
    likes: 22,
    dislikes: 1,
    replies: [],
  },
  {
    id: "abc789",
    username: "amritakar",
    comment: "2023 video",
    likes: 90,
    dislikes: 5,
    replies: [],
  },
  {
    id: "efg123",
    username: "utpalkar",
    comment: "well explained video",
    likes: 34,
    dislikes: 17,
    replies: [
      {
        id: "efg456123",
        username: "udayankar",
        comment: "hard working video",
        likes: 22,
        dislikes: 1,
        replies: [
          {
            id: "efg456456",
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
    id: "efg456",
    username: "shivangikapoor",
    comment: "cat exam 2025 video",
    likes: 2,
    dislikes: 15,
    replies: [],
  },
];

function CommentBox() {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <CommentList list={commentsData}></CommentList>
    </div>
  );
}

export default CommentBox;
