import ReactPlayer from 'react-player';

function VideoFeed() {
  return (
    <ReactPlayer 
      url={videos[currentVideo].url}
      controls
      width="100%"
      height="100%"
    />
  );
}
