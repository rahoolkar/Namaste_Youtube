import ButtonList from "./ButtonList";
import Feed from "./Feed";

function FeedBody() {
  return (
    <div className="w-full overflow-hidden">
      <ButtonList></ButtonList>
      <Feed></Feed>
    </div>
  );
}

export default FeedBody;
