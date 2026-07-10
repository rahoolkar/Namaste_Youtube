import Button from "./Button";
import { useRef } from "react";

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

  const containerRef = useRef(null);

  function handleScroll(direction) {
    const scrollAmount = 300;

    if (direction == "left") {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }

  return (
    <div className="hidden md:relative">
      <button
        onClick={() => {
          handleScroll("left");
        }}
        className="absolute left-0 top-1/4 bg-black text-amber-50 p-2 rounded-full z-10 px-3
        py-2 cursor-pointer"
      >
        ←
      </button>
      <div
        className="flex overflow-x-scroll scroll-smooth scrollbar-none pt-4 pb-4"
        ref={containerRef}
      >
        {buttonList.map((button, index) => {
          return <Button key={index} value={button}></Button>;
        })}
      </div>
      <button
        onClick={() => {
          handleScroll("right");
        }}
        className="absolute right-0 top-1/4 bg-black text-amber-50 p-2 rounded-full z-10 px-3
        py-2 cursor-pointer"
      >
        →
      </button>
    </div>
  );
}

export default ButtonList;
