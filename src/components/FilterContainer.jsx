import Filter from "./Filter";
import VideoContainer from "./VideoContainer";

function FilterContainer() {
  return (
    <div>
      <div className="flex overflow-auto sticky top-16 bg-white px-2 z-[99]">
        <Filter name={"All"}></Filter>
        <Filter name={"Trailers"}></Filter>
        <Filter name={"Drama"}></Filter>
        <Filter name={"Gaming"}></Filter>
        <Filter name={"Mixes"}></Filter>
        <Filter name={"Smartphones"}></Filter>
        <Filter name={"Live"}></Filter>
        <Filter name={"Music"}></Filter>
        <Filter name={"Anime"}></Filter>
        <Filter name={"Manga"}></Filter>
        <Filter name={"Gaming"}></Filter>
      </div>
      <VideoContainer></VideoContainer>
    </div>
  );
}

export default FilterContainer;
