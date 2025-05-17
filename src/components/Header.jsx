import { useDispatch } from "react-redux";
import { toggleExpand } from "../utils/barSlice";

export default function Header() {
  let dispatch = useDispatch();
  return (
    <div className="flex justify-between sticky top-0 bg-white">
      <div className="left-section flex items-center w-1/12">
        <div
          className="h-10 w-10 p-2 mx-2 hover: cursor-pointer"
          onClick={() => {
            dispatch(toggleExpand());
          }}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </div>
        <img
          className="h-16 w-28 mx-4"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
          alt="youtube-logo"
        />
      </div>
      <div className="middle-section w-10/12 flex justify-center items-center">
        <input
          placeholder="Search"
          type="text"
          className="w-6/12 border border-gray-400 p-2 rounded-l-full placeholder: px-4 text-md text-gray-400"
        ></input>
        <button className="border border-gray-400 rounded-r-full py-2 px-4 bg-gray-100">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="right-section flex justify-center items-center w-1/12">
        <img
          className="m-2 p-2 h-10"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
          alt=""
        />
        <img
          className="m-2 h-12"
          src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg"
          alt="user-profile"
        />
      </div>
    </div>
  );
}
