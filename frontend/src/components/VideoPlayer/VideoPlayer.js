import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import YouTube from '@u-wave/react-youtube';
import './VideoPlayer.css';
import Star from '../Star/Star';
import { getVideo }  from '../../services/videosService';

function VideoPlayer() {
  const videoId = useParams().id;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getVideo(videoId)
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
        <div className='video-player'>
            <YouTube className='video-player__youtube' video={videoId} autplay/>
            <div className='video-player__info'>
                <h3 className='video-player__title'>{data.title ? data.title : 'Dummy Youtube Title'}</h3>
                <Star videoid={videoId}/>
            </div>   
        </div>
    );
}

export default VideoPlayer;