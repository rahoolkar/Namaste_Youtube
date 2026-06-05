import React from "react";
import { categories } from "../utils/Categories";
import LeftCategoryMenuItem from "./LeftCategoryMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../store/selectedCategorySlice";

function LeftCategory() {
  const selected = useSelector(function (store) {
    return store.selectedCategory.selected;
  });

  const dispatch = useDispatch();

  return (
    <div className="w-2/12 overflow-y-auto h-full py-4 absolute md:relative z-10 -translate-x-50 md:translate-x-0 translate-all">
      <div className="flex flex-col px-4">
        {categories.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <LeftCategoryMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  dispatch(
                    setSelected(item.type === "home" ? "Home" : item.name),
                  );
                }}
                selected={selected}
              ></LeftCategoryMenuItem>

              {item.divider && <hr className="my-3 border-gray-400"></hr>}
            </React.Fragment>
          );
        })}
        <hr className="my-3 border-gray-400"></hr>
        <div className="text-black/30 md:text-xs">
          <p>Clone by Rahul Kar</p>
        </div>
      </div>
    </div>
  );
}

export default LeftCategory;
