function Comment({ data }) {
  let { username, comment } = data;
  return (
    <div className="flex border border-black">
      <img
        src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
        alt="default-pfp"
      />
      <div>
        <h3 className="text-sm font-bold">@{username}</h3>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comment;
