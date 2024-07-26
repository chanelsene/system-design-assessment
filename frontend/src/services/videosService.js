import axios from "axios";

const http =  axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json"
  }
});

export const getVideos = () => {
    return http.get('/videos');
};

export const getVideo = (videoId) => {
    return http.get(`videos/${videoId}`);
};