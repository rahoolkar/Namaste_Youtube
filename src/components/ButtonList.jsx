import Button from "./Button";

function ButtonList() {
  const buttonList = [
    "All",
    "Music",
    "Apple",
    "Study Skills",
    "Notion",
    "Gym",
    "Skincare",
    "Gaming",
    "Cafes",
    "Dinner",
    "Live",
    "Travel",
    "Cooking",
    "Coding",
    "Skincare",
    "Gaming",
    "Cafes",
    "Dinner",
    "Live",
    "Travel",
    "Study Skills",
    "Notion",
    "Gym",
  ];
  return (
    <div className="relative">
      <button className="absolute left-0 top-1/4 bg-black text-amber-50 p-2 rounded-full z-10 px-3
        py-2 cursor-pointer">
        ←
      </button>
      <div className="flex overflow-x-scroll scroll-smooth scrollbar-none pt-4 pb-4">
        {buttonList.map((button, index) => {
          return <Button key={index} value={button}></Button>;
        })}
      </div>
      <button className="absolute right-0 top-1/4 bg-black text-amber-50 p-2 rounded-full z-90 px-3
        py-2 cursor-pointer">
        →
      </button>
    </div>
  );
}

export default ButtonList;
