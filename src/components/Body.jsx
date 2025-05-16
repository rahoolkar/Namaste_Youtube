import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer"

function Body() {
  return <div className="flex">
    <Sidebar></Sidebar>
    <MainContainer></MainContainer>
  </div>;
}

export default Body;
