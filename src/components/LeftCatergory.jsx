import React from "react";
import { categories } from "../utils/Categories";
import LeftCategoryMenuItem from "./LeftCategoryMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../store/selectedCategorySlice";
import { useNavigate } from "react-router-dom";

function LeftCategory() {
  const selected = useSelector(function (store) {
    return store.selectedCategory.selected;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="h-full w-3/12 lg:w-2/12 overflow-y-auto py-4 fixed top-14 md:relative md:top-0 translate-x-0 translate-all bg-white z-10">
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
                  navigate(item.type === "home" ? "/" : `/${item.name}`);
                }}
                selected={selected}
              ></LeftCategoryMenuItem>

              {item.divider && <hr className="my-3 border-gray-400"></hr>}
            </React.Fragment>
          );
        })}
        <hr className="my-3 border-gray-400"></hr>
        <div className="text-black/30 md:text-xs hidden md:inline">
          <p>Clone by Rahul Kar</p>
        </div>
      </div>
    </div>
  );
}

export default LeftCategory;
