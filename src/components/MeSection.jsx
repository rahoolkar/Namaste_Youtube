import { Link } from "react-router-dom";

function MeSection() {
  return (
    <div className="w-48 p-2 sticky right-0 top-16">
      <div className="upper-section border-b-2 border-b-gray-300">
        <Link to="/">
          <div className="flex rounded-2xl hover:bg-gray-100">
            <img
              className="h-8 m-2"
              src="https://image.similarpng.com/file/similarpng/original-picture/2021/08/Instagram-home-icon-on-transparent-background-PNG.png"
              alt=""
            />
            <div className="flex items-center mx-2">
              <p className="font-bold text-sm">Home</p>
            </div>
          </div>
        </Link>

        <Link to={"/shorts"}>
          <div className="flex rounded-2xl hover:bg-gray-100">
            <img
              className="h-8 m-2"
              src="https://i.pinimg.com/736x/17/d2/18/17d21878c22fe49e7e4752eecaa36541.jpg"
              alt=""
            />
            <div className="flex items-center">
              <p className="font-bold text-sm mx-2">Shorts</p>
            </div>
          </div>
        </Link>

        <div className="flex rounded-2xl hover:bg-gray-100">
          <img
            className="h-6 mx-3 my-2"
            src="https://images.icon-icons.com/2248/PNG/512/youtube_subscription_icon_136007.png"
            alt=""
          ></img>
          <div className="flex items-center">
            <p className="font-bold text-sm mx-2">Subscriptions</p>
          </div>
        </div>
      </div>

      <div className="lower-section my-2 border-b-2 border-b-gray-300">
        <div>
          <div className="flex rounded-2xl hover:bg-gray-100">
            <img
              className="h-6 mx-3 my-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv08hBK86WreanSil5BZat7RlrStdXL33vQ&s"
              alt=""
            />
            <div className="flex items-center mx-2">
              <p className="font-bold text-sm">History</p>
            </div>
          </div>

          <div className="flex rounded-2xl hover:bg-gray-100">
            <img
              className="h-6 mx-3 my-2"
              src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png"
              alt=""
            />
            <div className="flex items-center mx-2">
              <p className="font-bold text-sm">Your videos</p>
            </div>
          </div>

          <div className="flex rounded-2xl hover:bg-gray-100">
            <img
              className="h-8 m-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bqqBcwDWTQLCAP88Zk7rnJWXPLEXUilT0A&s"
              alt=""
            />
            <div className="flex items-center mx-2">
              <p className="font-bold text-sm">Watch Later</p>
            </div>
          </div>

          <div className="flex rounded-2xl hover:bg-gray-100">
            <img
              className="h-8 m-2"
              src="https://static.thenounproject.com/png/4530409-200.png"
              alt=""
            />
            <div className="flex items-center mx-2">
              <p className="font-bold text-sm">Liked videos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeSection;
