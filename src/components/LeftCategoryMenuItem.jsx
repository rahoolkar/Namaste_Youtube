import { Link } from "react-router-dom";

function LeftCategoryMenuItem({ icon, text, action, selected }) {
  const showSelected = selected === text;

  const navigateTo =
    text.toLowerCase() === "home" ? "/" : `/${text.toLowerCase()}`;

  return (
    <Link to={navigateTo} onClick={action}>
      <div
        className={
          "flex flex-row items-center cursor-pointer px-3 py-1 mb-1 rounded-lg hover:bg-gray-100 text-sm" +
          (showSelected ? " bg-gray-200" : "")
        }
      >
        <span className="text-xl mr-5">{icon}</span>
        {text}
      </div>
    </Link>
  );
}

export default LeftCategoryMenuItem;
