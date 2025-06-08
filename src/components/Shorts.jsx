function Shorts({ vid, title }) {
  return (
    <div className="h-screen w-full snap-start flex items-center justify-center bg-white">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&controls=0&loop=1&playlist=${vid}`}
        frameBorder="0"
        title={title}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="aspect-[9/16] max-h-screen object-cover w-fit"
      />
    </div>
  );
}

export default Shorts;
