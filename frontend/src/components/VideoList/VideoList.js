import { useState, useEffect } from 'react';
import './VideoList.css';
import Video from '../Video/Video';
import { getVideos } from '../../services/videosService';

function VideoList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getVideos()
      .then(response => response.data)
      .then(setData)
      .then(setLoading(false))
      .catch(setError);
  }, []);

  if(loading) return <div>Loading...</div>
  if(error || !data) return (
    <h3>Sorry, we are still waiting for the data, please hold or try again later...</h3>
  );

    return (
        <ul>
            { data.map( video => (
                    <li key ={video.videoid}>
                        <Video title={video.title} videoid={video.videoid} thumbnail={video.thumbnail} />
                    </li>   
                ))
            }
        </ul>

    );
}

export default VideoList;