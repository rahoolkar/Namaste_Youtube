function LiveChatMessage({ author, text }) {
  return (
    <div className="flex py-1 px-2 items-center shadow-lg">
      <img
        className="mx-2 rounded-full h-6 w-6"
        src="https://yt3.googleusercontent.com/fuKxKvCm3_WtW0LGAjkyvUAA1EVTJ1EYCvRn0Uff-fbSHf4-NfULvKztbyiVl36mwIYzaMyC6_M=s900-c-k-c0x00ffffff-no-rj"
        alt="author-pfp"
      />
      <span className="mx-1 font-bold">{author}</span>
      <span>{text}</span>
    </div>
  );
}

export default LiveChatMessage;
