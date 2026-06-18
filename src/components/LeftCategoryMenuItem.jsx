function LeftCategoryMenuItem({ icon, text, action, selected }) {
  const showSelected = selected == text ? true : false;
  return (
    <div
      className={
        "flex flex-row items-center cursor-pointer px-3 py-1 mb-1 rounded-lg hover:bg-gray-100 text-sm" +
        (showSelected ? " bg-gray-200" : "")
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
}

export default LeftCategoryMenuItem;
