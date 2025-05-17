import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import SidebarShort from "./SidebarShort";

function Body() {
  let isExpand = useSelector((store) => {
    return store.bar.expand;
  });
  return (
    <div className="flex">
      {isExpand ? <Sidebar></Sidebar> : <SidebarShort></SidebarShort>}
      <MainContainer></MainContainer>
    </div>
  );
}

export default Body;
