export const API_KEY = "AIzaSyBIY6VZryJhZxylEekNOBferpcVhNGQt5Y";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const YOUTUBE_CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=&key="+API_KEY;

export const YOUTUBE_CHANNEL_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=&key="+API_KEY;

export const YOUTUBE_GET_CHANNEL_UPLOADS_API = "https://www.googleapis.com/youtube/v3/channels?&part=contentDetails&id=&key="+API_KEY;

export const YOUTUBE_GET_ALL_VIDEOS_BY_CHANNEL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=&maxResults=30&key="+API_KEY;

export const YOUTUBE_SEARCH_RESULTS_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=&type=video&maxResults=50&key=";