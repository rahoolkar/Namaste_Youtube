import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

function MainBody() {
  return (
    <div
      className="w-full
        overflow-hidden"
    >
      <ButtonList></ButtonList>
      <VideoContainer></VideoContainer>
    </div>
  );
}

export default MainBody;
