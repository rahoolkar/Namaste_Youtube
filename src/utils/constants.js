const YOUTUBE_ALL_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=";

const YOUTUBE_GET_CHANNEL_DETAILS = "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails&id=";

const YOUTUBE_API_KEY = "AIzaSyDfMPTt1LsYCGwa9O4oIA3vT82KS4EHgL0";

export { YOUTUBE_ALL_VIDEOS_API, YOUTUBE_API_KEY, YOUTUBE_GET_CHANNEL_DETAILS };
