function SidebarShort() {
  return (
    <div>
      <div className="sticky right-0 top-16 bg-white">
        <div className="rounded-2xl flex flex-col p-2 h-18 w-16 justify-center hover:bg-gray-100">
          <div className="flex items-center justify-center">
            <i className="fa-solid fa-house"></i>
          </div>
          <p className="text-xs text-center">Home</p>
        </div>
        <div className="rounded-2xl flex flex-col p-2 h-18 w-16 justify-center hover:bg-gray-100">
          <div className="flex items-center justify-center">
            <img
              className="h-8"
              src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg"
              alt=""
            />
          </div>
          <p className="text-xs text-center">Shorts</p>
        </div>
        <div className="rounded-2xl flex flex-col p-2 h-18 w-16 justify-center hover:bg-gray-100">
          <div className="flex items-center justify-center">
            <img
              className="h-6"
              src="https://images.icon-icons.com/2248/PNG/512/youtube_subscription_icon_136007.png"
              alt=""
            ></img>
          </div>
          <p className="text-xs text-center">Subs</p>
        </div>
        <div className="rounded-2xl flex flex-col p-2 h-18 w-16 justify-center hover:bg-gray-100">
          <div className="flex items-center justify-center">
            <i className="fa-solid fa-circle-user"></i>
          </div>
          <p className="text-xs text-center">You</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarShort;
