import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

function MainBody({ selectedCategories }) {
  
  return (
    <div
      className="w-full
        overflow-hidden"
    >
      <ButtonList></ButtonList>
      <VideoContainer selectedCategories={selectedCategories}></VideoContainer>
    </div>
  );
}

export default MainBody;
