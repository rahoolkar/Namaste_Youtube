import { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addToMessage } from "../utils/chatSlice";
import { v4 as uuidv4 } from "uuid";
import { generateRandomNames } from "../utils/helper";

function LiveChatBox({ handleCrossButton }) {
  const [liveChatInput, setLiveChatInput] = useState("");

  function handleOnchangeInput(event) {
    setLiveChatInput(event.target.value);
  }

  function clickLiveChatSendButton() {
    dispatch(
      addToMessage({
        id: uuidv4(),
        author: "rahulkar",
        text: liveChatInput,
      })
    );
  }

  let dispatch = useDispatch();

  let allLiveChat = useSelector((store) => {
    return store.chat.messages;
  });

  useEffect(() => {
    let cid = setInterval(() => {
      dispatch(
        addToMessage({
          id: uuidv4(),
          author: generateRandomNames(),
          text: "namaste-youtube 🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(cid);
    };
  }, []);

  return (
    <div className="border border-black rounded-2xl w-full h-full">
      <div className="live-chat-box-header border-b-1 flex justify-between items-center h-1/12">
        <div className="px-3">
          Top chat
          <span className="mx-1">
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div
          onClick={handleCrossButton}
          className="mx-2 px-2 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </div>
      </div>
      <div className="live-chat-box-body h-10/12 overflow-scroll flex flex-col-reverse">
        {allLiveChat.map((chat) => {
          return (
            <LiveChatMessage
              id={chat.id}
              author={chat.author}
              text={chat.text}
              key={chat.id}
            ></LiveChatMessage>
          );
        })}
      </div>
      <div className="live-chat-box-footer flex items-center justify-between h-1/12 px-3 border-t-1">
        <div>
          <input
            value={liveChatInput}
            onChange={handleOnchangeInput}
            className="border-1 w-70 rounded-4xl placeholder:text-gray-500 px-2"
            placeholder="Chats..."
            type="text"
          />
        </div>
        <div className="hover:bg-gray-200 px-2 py-1 rounded-full hover:cursor-pointer">
          <button
            onClick={() => {
              clickLiveChatSendButton();
              setLiveChatInput("");
            }}
          >
            <i className="fa-solid fa-paper-plane hover:cursor-pointer"></i>
          </button>
        </div>
        <div className="hover:bg-gray-200 px-2 py-1 rounded-full hover:cursor-pointer">
          <button>
            <i className="fa-solid fa-heart hover:cursor-pointer"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LiveChatBox;
